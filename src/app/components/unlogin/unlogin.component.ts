import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-unlogin',
  templateUrl: './unlogin.component.html',
  styleUrls: ['./unlogin.component.css']
})
export class UnloginComponent implements OnInit {

  @Output() tranforDataLogin = new EventEmitter();
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
  public setDataLogin(data){
    this.tranforDataLogin.emit(data);
  }
}
