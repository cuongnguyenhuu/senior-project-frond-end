import { Component, OnInit,  Input, EventEmitter, Output } from '@angular/core';

import { ConvertTimeService } from './../../services/convertTimeServices/convert-time.service';
@Component({
  selector: 'app-confirm-cancel-dialog',
  templateUrl: './confirm-cancel-dialog.component.html',
  styleUrls: ['./confirm-cancel-dialog.component.css']
})
export class ConfirmCancelDialogComponent implements OnInit {

  @Input() open : boolean;

  @Input() timeCancel:any;

  @Output() closeDialog = new EventEmitter();

  @Output() cancel = new EventEmitter();

  private message = '';
  private messageError;
  constructor(
    private convertTimeService:ConvertTimeService
  ) { }

  ngOnInit() {
    // console.log(this.thatDay+"/"+this.time_period.startAt);
    this.messageError = null;
    this.message = '';
  }

  public toggleConfirmDialog(){
    this.open = !this.open;
    this.closeDialog.emit(this.open);
  }

  public confirmOK(){
    if(this.message.trim()!=''){
      this.cancel.emit(this.message);
      this.toggleConfirmDialog();
    }else{
      this.messageError = "Please type your message!"
    }
  }
}
