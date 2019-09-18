import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unlogin',
  templateUrl: './unlogin.component.html',
  styleUrls: ['./unlogin.component.css']
})
export class UnloginComponent implements OnInit {

  private open_login:boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  public toggleLoginForm(){
    this.open_login = !this.open_login;
  }

  public setOpenLogin(status){
    this.open_login = status;
  }
}
