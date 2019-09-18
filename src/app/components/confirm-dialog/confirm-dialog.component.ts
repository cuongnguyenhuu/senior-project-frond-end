import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

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
