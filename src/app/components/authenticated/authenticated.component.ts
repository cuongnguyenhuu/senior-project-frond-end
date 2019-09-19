import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.css']
})
export class AuthenticatedComponent implements OnInit {

  @Input() ROLE;

  private messagesURL:string="";
  
  private profileURL: string="";
  constructor() { }

  ngOnInit() {
    switch (this.ROLE) {
      case "DOCTOR":
        this.messagesURL = "/doctor/messages"
        this.profileURL = "/doctor/profile"
        break;
      case "PATIENT":
        this.messagesURL = "/patient/messages"
        this.profileURL = "/patient/profile"
        break;
      default:
        break;
    }
  }

}
