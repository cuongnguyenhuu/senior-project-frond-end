import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-update-schedule',
  templateUrl: './update-schedule.component.html',
  styleUrls: ['./update-schedule.component.css']
})
export class UpdateScheduleComponent implements OnInit {

  @Input() open : boolean;

  @Output() closeDialog = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public toggleUpdateDialog(){
    this.open = !this.open;
    this.closeDialog.emit(this.open);
  }

}
