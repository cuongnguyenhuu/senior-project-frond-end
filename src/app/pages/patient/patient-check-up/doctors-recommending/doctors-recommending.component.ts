import { Component, OnInit } from '@angular/core';
import { PatientRecommendationService } from './../services/patient-recommendation/patient-recommendation.service';
@Component({
  selector: 'app-doctors-recommending',
  templateUrl: './doctors-recommending.component.html',
  styleUrls: ['./doctors-recommending.component.css']
})
export class DoctorsRecommendingComponent implements OnInit {

  private isAuthenticated:boolean=false;
  private message:string;
  private data;
  private isLoading:boolean = true;

  constructor(
    private patientRecommendationService: PatientRecommendationService
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
