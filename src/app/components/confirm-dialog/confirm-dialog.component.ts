import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { ConvertTimeService } from './../../services/convertTimeServices/convert-time.service';
@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  @Input() open : boolean;

  @Input() message:any;

  @Output() closeDialog = new EventEmitter();

  @Output() ok = new EventEmitter();
  constructor(
    public convertTimeService:ConvertTimeService
  ) { }

  ngOnInit() {
    // console.log(this.thatDay+"/"+this.time_period.startAt);
  }

  public toggleConfirmDialog(){
    this.open = !this.open;
    this.closeDialog.emit(this.open);
  }

  public confirmOK(){
    this.ok.emit();
    this.toggleConfirmDialog();
  }

}
