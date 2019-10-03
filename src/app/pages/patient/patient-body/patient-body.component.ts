import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-patient-body',
  templateUrl: './patient-body.component.html',
  styleUrls: ['./patient-body.component.css']
})
export class PatientBodyComponent implements OnInit {

  private ROLE:string = "PATIENT";
  private data;

  constructor() { }

  ngOnInit() {
  }

  public getDetailAppointment(data){
    this.data = data;
  }
}
