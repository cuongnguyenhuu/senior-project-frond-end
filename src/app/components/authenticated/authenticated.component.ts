import { Component, OnInit, Input } from '@angular/core';
import { UserServicesService } from './../../services/user-services/user-services.service';

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.css']
})
export class AuthenticatedComponent implements OnInit {

  @Input() ROLE;
  @Input() data;

  private messagesURL:string="";
  
  private profileURL: string="";
  constructor(
   private userServicesService: UserServicesService
  ) { }

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
    // console.log(this.data.avatar+this.data.name);
  }

  public logout(){
    this.userServicesService.logout();
  }
}
