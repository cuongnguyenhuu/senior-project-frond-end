import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor() { }

  private open_confirm : boolean = false;
  private open_notif : boolean = false;
  private open_update: boolean = false;

  ngOnInit() {
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
