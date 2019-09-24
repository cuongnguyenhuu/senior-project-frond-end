import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-patient-check-up',
  templateUrl: './patient-check-up.component.html',
  styleUrls: ['./patient-check-up.component.css']
})
export class PatientCheckUpComponent implements OnInit {


  private TryAgain:boolean = false;

  private data:any;
  private imageName:string;
  constructor(
  ) { }
  
  ngOnInit() {
    this.data =null;
  }

  public getResult(data){
    this.data = data;
  }

  public setImageName(image){
    this.imageName = image;
  }

  public tryAgain(){
    this.ngOnInit();
  }
}
