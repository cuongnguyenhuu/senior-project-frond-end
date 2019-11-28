import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServicesService } from 'src/app/services/user-services/user-services.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private username:String;
  private role:String;
  private profile;
  private data;
  private open_confirm = false;
  private messageConfirm ;
  constructor(
    private activatedRoute:ActivatedRoute,
    private userServices:UserServicesService,
    private _location: Location
  ) { }

  ngOnInit() {
   this.activatedRoute.paramMap.subscribe(data=>{
    this.username = data.get("username");
    this.role = data.get("role");
    console.log(this.username);
    this.userServices.getUserByUsername(this.username, this.role).subscribe(data=>{
      console.log(data);
      this.data = data;
      if(this.role == "patient"){
        this.profile = this.data.profilePatient;
      }
      if(this.role =="doctor"){
        this.profile = this.data.account;
      }
      // console.log(this.profile);
    })
    })
  }

  back(){
    this._location.back();
  }
  public banAccount(){
    console.log("ban");
    this.userServices.toggleStatusAccount(this.username).subscribe(data=>{
      console.log(data);
      this.ngOnInit();
    });
  }

  public setOpenConfirm(value){
    if(this.profile.account.is_banded){
      this.messageConfirm = "Are you sure to activate this account?";
    }
    else{
      this.messageConfirm = "Are you sure to ban this account?";
    }
    this.open_confirm=!this.open_confirm;
  }
}
