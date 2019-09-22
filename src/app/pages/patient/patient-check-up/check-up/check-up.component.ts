import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ImageServicesService } from './../../../../services/image-servives/image-services.service';
import { PatientCheckUpService } from './../services/patient-check-up-services/patient-check-up.service';
import { PatientAddResultService } from './../services/patient-add-result/patient-add-result.service';
import { LocalServicesService } from './../../../../services/local-services/local-services.service';

@Component({
  selector: 'app-check-up',
  templateUrl: './check-up.component.html',
  styleUrls: ['./check-up.component.css']
})
export class CheckUpComponent implements OnInit {

  @Output() result = new EventEmitter();

  private image:string;
  private errorMessage;
  private URL:string = "http://localhost:8080/api/utility/image/";
  private isloading:boolean =false;
  private disabled:boolean = true;
  private diseases:any;
  private result_text:string = "";

  constructor(
    private imageServicesService: ImageServicesService,
    private patientCheckUpService:PatientCheckUpService,
    private patientAddResultService:PatientAddResultService,
    private localServicesService:LocalServicesService
  ) { }

  ngOnInit() {
    this.localServicesService.getDiseases().subscribe(data=>{
      this.diseases = data;
    })
  }

  public uploadImage(file:File){
    this.imageServicesService.uploadImage(file).subscribe(data=>{
      if(data.success==true){
        this.image = data.message;
        this.disabled=false;
      }else{
        this.errorMessage = data.message;
      }
    },
    error=>{
      this.errorMessage = error;
      console.log(error);
    })
  }

  public checkUp(){
    this.isloading=true;
    this.patientCheckUpService.checkUp(this.URL+this.image).subscribe(data=>{
      console.log(data);
      this.isloading = false;
      var temp = JSON.parse(data);
      for(var i = 0; i<temp.length; i++){
        this.result_text +=this.diseases[i].name +", "+temp[i]+"%; "; 
      }

      if(localStorage.getItem("token")!=null)
      this.patientAddResultService.addResult(this.image,this.result_text).subscribe(data=>{
        console.log(data);
        localStorage.setItem("lastest_checkup",data);
      },
      error=>{
        console.log(error);
      });

      this.result.emit(data);
    },
    error=>{
      console.log(error);
      this.isloading = false;
    })
  }
}
