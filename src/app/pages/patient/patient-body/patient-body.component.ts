import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-patient-body',
  templateUrl: './patient-body.component.html',
  styleUrls: ['./patient-body.component.css']
})
export class PatientBodyComponent implements OnInit {

  public ROLE:string = "PATIENT";
  public data;

  constructor() { }

  ngOnInit() {
  }

  public getDetailAppointment(data){
    this.data = data;
  }
}
