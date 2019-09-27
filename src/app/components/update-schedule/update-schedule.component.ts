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

  private timePerAppointments:number[] = [30,60];
  private preBooks:number[] = [1,2,3,4];
  private times:number[];

  private timePerAppointment:number;
  private preBook:number;
  private startAt:number;
  private endAt:number;

  private originalData:any;

  constructor(
    private convertTimeService:ConvertTimeService,
    private scheduleService:ScheduleService,
    private spinner:NgxSpinnerService
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
