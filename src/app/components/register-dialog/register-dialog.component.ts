import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LocalServicesService } from './../../services/local-services/local-services.service';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {

  @Input() open : boolean;

  @Output() closeDialog = new EventEmitter();

  private isDoctor = false;
  private data:any;
  private provinces:any[] = [];
  private districts:any[] = [];
  private wards:any[] = [];

  private provinceSelected:any = 'default';
  private districtSelected:any = 'default';
  private wardSelected:any = 'default';

  constructor(
    private localServicesService: LocalServicesService
  ) { }

  ngOnInit() {
    this.localServicesService.getLocal().subscribe(data=>{
      // console.log(data);
      this.data = data;
      for(var i =0; i<this.data.length; i++){
        this.provinces[i] = this.data[i];
        
      }
    })
  }

  public provinceOption(provinceIndex:number){
    this.provinceSelected = provinceIndex;
    this.districts = [];
    this.districtSelected = 'default';
    this.wardSelected='default';
    // console.log(this.provinceSelected);
    for(var i =0; i<this.provinces[provinceIndex].districts.length; i++){
      this.districts[i] = this.provinces[provinceIndex].districts[i];
    }
    // console.log(this.districts);
  }

  public districtOption(districtIndex:number){
    this.districtSelected = districtIndex;
    this.wards = [];
    this.wardSelected='default';
    for(var i =0; i<this.districts[districtIndex].wards.length;i++){
      this.wards[i] = this.districts[districtIndex].wards[i];
    }
  }

  public wardOption(wardIndex:number){
    this.wardSelected = wardIndex;
  }
  public toggleRegisterDialog(){
    this.open = !this.open;
    this.closeDialog.emit(this.open);
  }

  public toggleIsDoctor(){
    this.isDoctor = !this.isDoctor;
  }

}
