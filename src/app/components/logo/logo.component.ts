import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  @Input() ROLE;
  constructor() { }

  ngOnInit() {
  }

  public getHomeURL(): string{
    if(this.ROLE === "ADMIN"){
      return "/admin/overview";
    }
    else if(this.ROLE === "DOCTOR"){
      return "/doctor/appointments";
    }
    else
    {
      return "/patient/home";
    }
  }
}
