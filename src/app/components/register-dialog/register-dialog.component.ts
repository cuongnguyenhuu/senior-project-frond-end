import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LocalServicesService } from './../../services/local-services/local-services.service';
import { UserServicesService } from './../../services/user-services/user-services.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ImageServicesService } from './../../services/image-servives/image-services.service';

import { patientRegister } from './../../models/patientRegister';
import { doctorRegsiter } from './../../models/doctorRegister';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {

  @Input() open : boolean;

  @Output() closeDialog = new EventEmitter();

  @Output() moveToLogin = new EventEmitter();

  private isDoctor = false;
  private data:any;
  private provinces:any[] = [];
  private districts:any[] = [];
  private wards:any[] = [];
  private specialists:any[]=[];

  private provinceSelected:any = 'default';
  private districtSelected:any = 'default';
  private wardSelected:any = 'default';
  private specialistSelected:string='default';

  private username:string='';
  private password:string='';
  private rePassword:string='';
  private email:string='';
  private phoneNumber:string='';
  private birthday:number;
  private name:string = '';
  private gender:string = "male";
  private country:string = "Viet Nam";
  private street:string='';
  private experiences:number; 
  private certificate:string='';
  
  private errorMessages:string;

  constructor(
    private localServicesService: LocalServicesService,
    private userServicesService: UserServicesService,
    private spinner:NgxSpinnerService,
    private imageServicesService: ImageServicesService
  ) { }

  ngOnInit() {
    this.localServicesService.getLocal().subscribe(data=>{
      // console.log(data);
      this.data = data;
      for(var i =0; i<this.data.length; i++){
        this.provinces[i] = this.data[i];
        
      }
    })
    this.getSpecialists();
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
    if(this.open==false){
      this.errorMessages='';
    }
    this.closeDialog.emit(this.open);
    
  }

  public toggleIsDoctor(){
    this.isDoctor = !this.isDoctor;
  }

  public register(){
    if(!this.isAllFill()){
      this.errorMessages = "Please type all fields."
    }else if(!this.comparePassword()){
      this.errorMessages = "Confirm password not match."
    }else if(!this.isEmailValidated()){
      this.errorMessages = "Email is not valid."
    }else if(!this.isPhoneNumberValidated()){
      this.errorMessages = "Phone number is not valid."
    }else{
      if(!this.isDoctor){
        this.toggleRegisterDialog();
        this.spinner.show();
        var birthday = Date.parse(this.birthday+"");
        var data:patientRegister = new patientRegister(this.username,this.password
          ,this.email,this.phoneNumber, this.name, birthday, this.gender,
          this.country, this.provinces[this.provinceSelected].name,
          this.districts[this.districtSelected].name, this.wards[this.wardSelected].name,
          this.street);
        this.userServicesService.patientRegister(data).subscribe(data=>{
          this.spinner.hide();
          if(data.success==false){
            this.errorMessages = data.message;
            this.toggleRegisterDialog();
          }else{
            this.errorMessages = data.message;
            this.moveToLoginForm();
          }
        },
        error=>{
          this.errorMessages = error.status;
          console.log(error);
        })
      }else{
        if(this.isExperiencesValidated()){
          this.toggleRegisterDialog();
          this.spinner.show();
          var birthday = Date.parse(this.birthday+"");
          var dataDoctor:doctorRegsiter = new doctorRegsiter(this.username,this.password
            ,this.email,this.phoneNumber, this.name, birthday, this.gender,
            this.country, this.provinces[this.provinceSelected].name,
            this.districts[this.districtSelected].name, this.wards[this.wardSelected].name,
            this.street,this.specialists[this.specialistSelected].name,this.experiences, this.certificate);
          this.userServicesService.doctorRegister(dataDoctor).subscribe(data=>{
            this.spinner.hide();
            if(data.success==false){
              this.errorMessages = data.message;
              this.toggleRegisterDialog();
            }else{
              this.errorMessages = data.message;
              this.moveToLoginForm();
            }
          },
          error=>{
            this.errorMessages = error.status;
            console.log(error);
          })
        }
      }  
    }
  }

  public moveToLoginForm(){
    this.moveToLogin.emit(true);
  }

  public isExperiencesValidated(){
    return this.experiences>=0;
  }

  public isAllFill():boolean{
    if(this.username.trim()===""||this.password.trim()===""
    ||this.rePassword.trim()===""||this.email.trim()===""
    ||this.phoneNumber.trim()==""||this.provinceSelected==="default"
    ||this.districtSelected==="default"||this.wardSelected==="default"
    ||this.street.trim()===""||this.birthday==null||this.name.trim()===""){
      return false;
    }
    if(this.isDoctor){
      if(this.specialistSelected==="default"||this.certificate===""||this.experiences===null){
        return false;
      }
    }
    return true;
  }

  public comparePassword():boolean{
    if(this.password===this.rePassword){
      return true;
    }
    return false;
  }

  public isEmailValidated():boolean{
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(this.email).toLowerCase());
  }

  public isPhoneNumberValidated():boolean{
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,5}$/im;
    return re.test(String(this.phoneNumber).toLowerCase());
  }

  public uploadImage(file:File){
      // console.log(file.size);
    this.imageServicesService.uploadImage(file).subscribe(data=>{
      if(data.success==true){
        this.certificate = data.message;
      }
      else{
        this.errorMessages=data.message;
      }
    },
    error=>{
      this.errorMessages = error;
      console.log(error);
    })
  }

  public getSpecialists(){
    this.localServicesService.getSpecialists().subscribe(data=>{
      this.specialists = data;
    },
    error=>{
      console.log(error);
    })
  }

  public specialistOption(specialistIndex){
    this.specialistSelected = specialistIndex;
  }
}
