import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { ConvertTimeService } from './../../services/convertTimeServices/convert-time.service';
import { ScheduleService } from './../../services/schedule-services/schedule.service';

import { Schedule } from './../../models/schedule';

import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-update-schedule',
  templateUrl: './update-schedule.component.html',
  styleUrls: ['./update-schedule.component.css']
})
export class UpdateScheduleComponent implements OnInit {

  @Input() open : boolean;

  @Output() closeDialog = new EventEmitter();

  @Output() updated = new EventEmitter();

  private typeUpdate:string;
  private schedules:Schedule[]=[];
  private time_per_appointment:string = "00:30";
  private inputTime:string[] = [];
  private message:string=null;

  private originalData:any;

  constructor(
    private convertTimeService:ConvertTimeService,
    private scheduleService:ScheduleService,
    private spinner:NgxSpinnerService
  ) { }

  ngOnInit() {
    this.typeUpdate="EACH_DAY";
    this.scheduleService.getScheduleUpdate().subscribe(data=>{
      console.log(data);
      
      this.originalData = data;
      this.time_per_appointment = this.convertTimeService.intToTime(parseInt(this.originalData[0].timePerAppointment));
      for(var i = 0; i<7; i++){
        this.schedules[i] =new  Schedule(0,0,[]);
        // console.log(this.schedules[i]);
        if(this.originalData[i].timePeriod==""){
          this.schedules[i] =null;
        }
        else{
          this.schedules[i].$dayOfTheWeek = this.originalData[i].dayOfTheWeek;
          this.schedules[i].$timePerAppointment = this.originalData[i].timePerAppointment;
          this.schedules[i].$time_period = this.originalData[i].timePeriod.split(",");
        }
        
      }
    })
  }

  public addTime(date_index){
    if(!this.isTimeValidate(this.inputTime[date_index])){
      this.message = 'Time is invalid.Please follow this format: "HH:mm"'
    }
    else if(this.convertTimeService.timeToInt(this.time_per_appointment)<=0){
      this.message = "Time per an appointment have to be larger than 0";
    }
    else if(!this.valueValidate(this.inputTime[date_index])){
      this.message = "Start time have to be less then end time and period time must to be divide time per an appointment.";
    }
    else{
      if(this.schedules[date_index]==null){
        var t:string[] = this.inputTime[date_index].split("-");
        var time_int = this.convertTimeService.timeToInt(t[0])+"-"+this.convertTimeService.timeToInt(t[1])
        var schedule = new Schedule(date_index,this.convertTimeService.timeToInt(this.time_per_appointment),[time_int]);
        this.schedules[date_index] = schedule;
        this.inputTime[date_index] ='';
        this.message=null;
      }else{
        if(!this.isExistTime(date_index,this.inputTime[date_index])){
          this.message = "Time is repeated!";
        }
        else{
          var t:string[] = this.inputTime[date_index].split("-");
          var time_int = this.convertTimeService.timeToInt(t[0])+"-"+this.convertTimeService.timeToInt(t[1])
          this.schedules[date_index].$time_period[this.schedules[date_index].$time_period.length] = time_int; 
          this.inputTime[date_index] ='';
          this.message=null;
        }
      }
      console.log(JSON.stringify(this.schedules));
    }
  }
  public removeAll(){
    this.schedules = [];
  }
  public formatFromIntToTime(time:string):string{
    var t:string[] = time.split("-");
    var time_format = this.convertTimeService.intToTime(parseInt(t[0]))+"-"+this.convertTimeService.intToTime(parseInt(t[1]))
    return time_format;
  }

  public removeTime(date_index,time){
    var time_index = this.schedules[date_index].$time_period.indexOf(time);
    this.schedules[date_index].$time_period.splice(time_index,1);
  }

  public toggleUpdateDialog(){
    this.open = !this.open;
    this.closeDialog.emit(this.open);
  }

  public setTypeUpdate(event){
    this.typeUpdate = event.target.value;
  }

  public isTimeValidate(time:string):boolean{
    var reg = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])-([0-1]?[0-9]|2[0-4]):([0-5][0-9])?$/;
    return reg.test(time); 
  }

  public valueValidate(time_period:string):boolean{
    var time:string[] = time_period.split("-");
    if(this.convertTimeService.timeToInt(time[0])<this.convertTimeService.timeToInt(time[1])){
      if((this.convertTimeService.timeToInt(time[1])-this.convertTimeService.timeToInt(time[0]))
      %this.convertTimeService.timeToInt(this.time_per_appointment)==0){
        return true;
      }
    } 
    return false;
  }

  public isExistTime(date_index, time_period):boolean{
    var time:string[] = time_period.split("-");
    var time1 = this.convertTimeService.timeToInt(time[0]);
    var time2 = this.convertTimeService.timeToInt(time[1]);
    for(var i=0; i<this.schedules[date_index].$time_period.length; i++){
      var t:string[] =  this.schedules[date_index].$time_period[i].split("-");
      var t1 = parseInt(t[0]);
      var t2 = parseInt(t[1]);
      if(!((t1>=time2&&t2>time2)||(t1<time1&&t2<=time1))){
        return false;
      }
    }
    return true;
  }

  public updateSchedules(){
    var data:Schedule[] = [];
    if(this.typeUpdate=="EACH_DAY"){
      for(var i = 0; i<7; i++){
        if(this.schedules[i]!=null){
          data[data.length] = this.schedules[i];
        }
      }
      if(data.length == 0){
        this.message = "Fill out your time below.";
      }else{
        this.toggleUpdateDialog();
        this.spinner.show();
        for(var i =0; i<7; i++){
          if(this.schedules[i]==null){
            this.originalData[i].time_period = "";
          }else{
            var time_string='';
            // console.log((this.schedules[i].$time_period)[0]);
            for(var j = 0; j<this.schedules[i].$time_period.length; j++){
              
              if(j==this.schedules[i].$time_period.length-1){
                time_string +=(this.schedules[i].$time_period)[j];
                // console.log((this.schedules[i].$time_period)[j]);
              }else{
                time_string +=(this.schedules[i].$time_period)[j]+',';
                // console.log((this.schedules[i].$time_period)[j]);
              }
            }
            this.originalData[i].timePeriod = time_string;
          }
          this.originalData[i].timePerAppointment = this.convertTimeService.timeToInt(this.time_per_appointment);
        }
        this.scheduleService.updateSchedule(this.originalData).subscribe(data=>{
          console.log(data);
          this.spinner.hide();
          this.updated.emit(true);
        },
        error=>{
          this.spinner.hide();
          this.toggleUpdateDialog();
          this.message = "Something went wrong. Try again!"
          console.log(error);
        })
      }
    }else if(this.schedules[7]!=null){
      this.toggleUpdateDialog();
      this.spinner.show();
      var time_string='';
            for(var j = 0; j<this.schedules[7].$time_period.length; j++){
              if(j==this.schedules[i].$time_period.length-1){
                time_string +=(this.schedules[7].$time_period)[j];
              }else{
                time_string +=(this.schedules[7].$time_period)[j]+',';
              }
            }
      for(var i = 0; i<7; i++){
        this.originalData[i].timePeriod = time_string;
        this.originalData[i].timePerAppointment = this.convertTimeService.timeToInt(this.time_per_appointment);
      }
      this.scheduleService.updateSchedule(this.originalData).subscribe(data=>{
        console.log(data);
        this.spinner.hide();
        this.updated.emit(true);
      },
      error=>{
        this.spinner.hide();
        this.toggleUpdateDialog();
        this.message = "Something went wrong. Try again!"
        console.log(error);
      })
    }else{
      this.message = "Fill out your time below.";
    }
    
    console.log(this.originalData);
  }
}
