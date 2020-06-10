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

  public typeUpdate:string;
  public schedules:Schedule[]=[];
  public time_per_appointment:string = "00:30";
  public inputTime:string[] = [];
  public message:string=null;

  public timePerAppointments:number[] = [30,60];
  public preBooks:number[] = [1,2,3,4];
  public times:number[];

  public timePerAppointment:number;
  public preBook:number;
  public startAt:number;
  public endAt:number;

  public originalData:any;

  constructor(
    public convertTimeService:ConvertTimeService,
    public scheduleService:ScheduleService,
    public spinner:NgxSpinnerService
  ) { }

  ngOnInit() {
    this.setTimes(this.timePerAppointments[0]);
    this.preBook = this.preBooks[0];
    this.startAt = this.times[0];
    this.endAt = this.times[0];
  }

  public setTimes( timePerAppointment: number){
    this.times = [];
    this.timePerAppointment = timePerAppointment;
    for (let index = 0; index < 24/(timePerAppointment/60); index++) {
      this.times[index] = timePerAppointment*(index)*60*1000;
    }
  }

  public changeTimePerAppointment(time){
    this.setTimes(time);
  }

  public changeStartAt(startAt){
    this.startAt = startAt;
  }

  public changeEndAt(endAt){
    this.endAt = endAt;
  }

  public changePreBook(prebook){
    this.preBook = prebook;
  }

  public toggleUpdateDialog(){
    this.open = !this.open;
    this.closeDialog.emit(this.open);
  }

  public setTypeUpdate(event){
    this.typeUpdate = event.target.value;
  }

  public updateSchedule(){
    this.spinner.show();
    this.toggleUpdateDialog();
    console.log(this.timePerAppointment+"/"+this.preBook+"/"+this.startAt+"/"+this.endAt);
    this.scheduleService.updateSchedule(this.timePerAppointment*60*1000,this.preBook, this.startAt, this.endAt)
    .subscribe(data=>{
      console.log(data);
      this.updated.emit();
      this.spinner.hide();
    },
    error=>{
      this.spinner.hide();
      this.toggleUpdateDialog();
      console.log(error);
    })
  }

  
}
