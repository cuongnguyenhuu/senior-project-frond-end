import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  @Input() open : boolean;

  @Output() closeDialog = new EventEmitter();

  private open_register:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public toggleLoginDialog(){
    this.open = !this.open;
    this.closeDialog.emit(this.open);
  }

  public toggleRegisterDialog(){
    this.open_register = !this.open_register;
    this.toggleLoginDialog();
  }

  public setOpenRegister(status){
    this.open_register = status;
  }

}
