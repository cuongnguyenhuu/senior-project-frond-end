import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { ConvertTimeService } from './../../services/convertTimeServices/convert-time.service';
@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  @Input() open : boolean;

  @Input() timeBook:any;

  @Output() closeDialog = new EventEmitter();

  @Output() book = new EventEmitter();
  constructor(
    private convertTimeService:ConvertTimeService
  ) { }

  ngOnInit() {
    // console.log(this.thatDay+"/"+this.time_period.startAt);
  }

  public toggleConfirmDialog(){
    this.open = !this.open;
    this.closeDialog.emit(this.open);
  }

  public confirmOK(){
    this.book.emit();
    this.toggleConfirmDialog();
  }

}
