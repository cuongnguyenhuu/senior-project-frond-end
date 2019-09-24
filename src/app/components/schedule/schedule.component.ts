import { Component, OnInit } from '@angular/core';
import { ScheduleService } from './../../services/schedule-services/schedule.service';
import { ConvertTimeService } from './../../services/convertTimeServices/convert-time.service';
import { ActivatedRoute } from "@angular/router";
import { BookingRequest } from 'src/app/models/bookingRequest';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  private ROLE:string;
  private data:any;
  private isLoading:boolean = true;
  constructor(
    private scheduleService: ScheduleService,
    private convertTimeService:ConvertTimeService,
    private route: ActivatedRoute
  ) { }
  private dayName=["Sunday","Monday","Tuesday","Wednesday","Thusday","Friday","Saturday"];
  private open_confirm : boolean = false;
  private open_notif : boolean = false;
  private open_update: boolean = false;

  private userdoctor:string;
  private currentDate:number;

  private thatDay:number;
  private time_period:any;
  private scheduleResponse:any;
  ngOnInit() {
    this.currentDate = new Date().getDay();
    this.dayName = this.sortArrayByDay(this.dayName,this.currentDate);
    this.ROLE = JSON.parse(localStorage.getItem("token")).role[0].authority;
    if(this.ROLE =="ROLE_DOCTOR"){
      this.scheduleService.getSchedule().subscribe(data=>{
        console.log(data);
        this.data =data;
        this.isLoading = false;
        this.data.scheduleResponses = this.sortArrayByDay(this.data.scheduleResponses,this.currentDate);
        // this.convertTimeService.intToTime
      },
      error=>{
        console.log(error);
        this.isLoading = false;
      })
    }
    else{
      this.userdoctor = this.route.snapshot.paramMap.get("userdoctor");
      this.scheduleService.getScheduleByUsername(this.userdoctor).subscribe(data=>{
        console.log(data);
        this.data =data;
        this.isLoading = false;
        this.data.scheduleResponses = this.sortArrayByDay(this.data.scheduleResponses,this.currentDate);
      },
      error=>{
        console.log(error);
        this.isLoading = false;
      })
    }
    // this.isLoading = false;
    
    console.log(this.currentDate);
    
    console.log(this.dayName);
  }

  public sortArrayByDay(arr:any[],dayIndex:number):any{
    return arr.slice(dayIndex+1,arr.length).concat(arr.slice(0,dayIndex+1));
  }

  public toggleNotifDialog(){
    this.open_notif = !this.open_notif;
  }

  public setOpenNotif(status){
    this.open_notif = status;
  }

  public toggleConfirmDialog(indexDay:number,time_period:any, scheduleResponse:any) {
    this.open_confirm = !this.open_confirm;
    if(indexDay!=null&&time_period!=null){
      var thatDay:number = new Date().getTime()+(indexDay+1)*60*60*24*1000;
      this.thatDay = thatDay;
      this.time_period = time_period;
      this.scheduleResponse = scheduleResponse;
      console.log(indexDay+"/"+time_period.startAt);
    }
    
  }

  public setOpenConfirm(status){
    this.open_confirm = status;
  }

  public toggleUpdateDialog() {
    this.open_update = !this.open_update;
  }

  public setOpenUpdate(status){
    this.open_update = status;
  }
  
  public bookAppointment(){
    var bookingRequest:BookingRequest = new BookingRequest(this.time_period.indexTime,-1,"",this.time_period.startAt+"-"+this.time_period.endAt);
    this.scheduleService.bookAppointment(this.scheduleResponse.id,bookingRequest).subscribe(data=>{
      console.log(data);
      this.ngOnInit();
    },
    error=>{
      console.log(error);
    })
  }
}
