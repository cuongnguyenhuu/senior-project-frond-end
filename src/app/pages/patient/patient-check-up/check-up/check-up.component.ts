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

  @Output() imageName = new EventEmitter();

  public image: string;
  public errorMessage;
  // public URL:string = "http://localhost:8080/api/utility/image/";
  public isloading: boolean = false;
  public disabled: boolean = true;
  public diseases: any;
  public result_text: Array<String> = [];

  constructor(
    public imageServicesService: ImageServicesService,
    public patientCheckUpService: PatientCheckUpService,
    public patientAddResultService: PatientAddResultService,
    public localServicesService: LocalServicesService
  ) { }

  ngOnInit() {
    this.localServicesService.getDiseases().subscribe(data => {
      this.diseases = data;
    })
  }

  public uploadImage(file: File) {
    this.imageServicesService.uploadImage(file).subscribe(data => {
      if (data !== null) {
        console.log(data)
        this.image = data.image;
        this.disabled = false;
      } else {
        this.errorMessage = data.message;
      }
    },
      error => {
        this.errorMessage = error;
        console.log(error);
      })
  }

  public checkUp() {
    this.isloading = true;
    this.patientCheckUpService.checkUp(this.image).subscribe(data => {
      console.log(data);
      this.isloading = false;
      var temp = data;
      for (var i = 0; i < temp.length; i++) {
        this.result_text.push(this.diseases[i].name + ": " + Math.round((temp[i] * 100)) + "%");
      }

      if (localStorage.getItem("token") != null)
        this.patientAddResultService.addResult(this.image, JSON.stringify(this.result_text)).subscribe(data => {
          console.log(data);
          localStorage.setItem("lastest_checkup", data);
        },
          error => {
            console.log(error);
          });

      this.result.emit(data);
      this.imageName.emit(this.image);
    },
      error => {
        console.log(error);
        this.isloading = false;
      })
  }
}
