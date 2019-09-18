import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-notif-dialog',
  templateUrl: './notif-dialog.component.html',
  styleUrls: ['./notif-dialog.component.css']
})
export class NotifDialogComponent implements OnInit {

  @Input() open : boolean;

  @Output() closeDialog = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public toggleConfirmDialog(){
    this.open = !this.open;
    this.closeDialog.emit(this.open);
  }

}
