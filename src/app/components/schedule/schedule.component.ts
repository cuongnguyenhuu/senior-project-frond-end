import { Component, OnInit } from '@angular/core';
import { ScheduleService } from './../../services/schedule-services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  private ROLE:string;
  private data:any[] = [];
  private isLoading:boolean = true;
  constructor(
    private scheduleService: ScheduleService,
  ) { }

  private open_confirm : boolean = false;
  private open_notif : boolean = false;
  private open_update: boolean = false;

  ngOnInit() {
    // this.ROLE = JSON.parse(localStorage.getItem("token")).role[0].authority;
    // if(this.ROLE =="ROLE_DOCTOR"){
    //   this.scheduleService.getSchedule().subscribe(data=>{
    //     console.log(data);
    //     this.data =data;
    //     this.isLoading = false;
    //   },
    //   error=>{
    //     console.log(error);
    //   })
    // }
    this.isLoading = false;
  }

  public toggleNotifDialog(){
    this.open_notif = !this.open_notif;
  }

  public setOpenNotif(status){
    this.open_notif = status;
  }

  public toggleConfirmDialog() {
    this.open_confirm = !this.open_confirm;
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
}
