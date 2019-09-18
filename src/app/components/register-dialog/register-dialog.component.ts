import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {

  @Input() open : boolean;

  @Output() closeDialog = new EventEmitter();

  private isDoctor = false;

  constructor() { }

  ngOnInit() {
  }

  public toggleRegisterDialog(){
    this.open = !this.open;
    this.closeDialog.emit(this.open);
  }

  public toggleIsDoctor(){
    this.isDoctor = !this.isDoctor;
  }

}
