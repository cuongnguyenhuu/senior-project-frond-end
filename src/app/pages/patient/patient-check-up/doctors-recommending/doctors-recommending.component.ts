import { Component, OnInit } from '@angular/core';
import { PatientRecommendationService } from './../services/patient-recommendation/patient-recommendation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctors-recommending',
  templateUrl: './doctors-recommending.component.html',
  styleUrls: ['./doctors-recommending.component.css']
})
export class DoctorsRecommendingComponent implements OnInit {

  public isAuthenticated:boolean=false;
  public message:string;
  public data;
  public isLoading:boolean = true;

  constructor(
    public patientRecommendationService: PatientRecommendationService,
    public router:Router
  ) { }

  ngOnInit() {
    if(localStorage.getItem("token")!=null){
      this.isAuthenticated = true;
      this.patientRecommendationService.recommendDoctors().subscribe(data=>{
        this.isLoading = false;
        if(data.length == 0){
          this.message = "Doctors not found"
        }
        else{
          this.data = data;
        }
        console.log(data);
      },
      error=>{
        console.log(error);
      })
    }
  }
}
