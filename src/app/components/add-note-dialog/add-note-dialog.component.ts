import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-note-dialog',
  templateUrl: './add-note-dialog.component.html',
  styleUrls: ['./add-note-dialog.component.css']
})
export class AddNoteDialogComponent implements OnInit {

  @Input() open : boolean;
  @Input() textNote:string;
  // @Input() timeCancel:any;

  @Output() closeDialog = new EventEmitter();

  @Output() note = new EventEmitter();

  @Output() ignore = new EventEmitter();
  // private message = '';
  private messageError;
  constructor() { }

  ngOnInit() {
    console.log(this.textNote)
  }
  public toggleNoteDialog(){
    this.open = !this.open;
    // this.closeDialog.emit(this.open);
    this.ignore.emit(this.open);
  }                                                                                             

  public confirmOK(){
    if(this.textNote.trim()!=''){
      this.note.emit(this.textNote);
      this.open = !this.open;
    this.closeDialog.emit(this.open);                                                                                               
    }else{
      this.messageError = "Please type your note!"
    }
  }
}
