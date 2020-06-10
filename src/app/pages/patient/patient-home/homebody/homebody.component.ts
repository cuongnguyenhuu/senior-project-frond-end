import { Component, OnInit } from '@angular/core';

import { HomeService } from './../service/home.service';

@Component({
  selector: 'app-homebody',
  templateUrl: './homebody.component.html',
  styleUrls: ['./homebody.component.css']
})
export class HomebodyComponent implements OnInit {

  public data:any;
  public URL:string= "http://localhost:8080/api/";
  constructor(
    public homeService: HomeService
  ) { }

  ngOnInit() {
    this.homeService.getDataHomeBody().subscribe(data=>{
      if(data.totalDoctors>10)
      data.totalDoctors = Math.floor(data.totalDoctors/10)*10;
      if(data.totalPatients>10)
      data.totalPatients = Math.floor(data.totalPatients/10)*10;
      if(data.totalAppointments>10)
      data.totalAppointments = Math.floor(data.totalAppointments/10)*10;
      this.data = data;
      console.log(data);
    },
    error=>{
      console.log(error);
    })
  }

}
