import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-body',
  templateUrl: './doctor-body.component.html',
  styleUrls: ['./doctor-body.component.css']
})
export class DoctorBodyComponent implements OnInit {

  public ROLE :string = "DOCTOR";

  constructor() { }

  ngOnInit() {
  }

}
