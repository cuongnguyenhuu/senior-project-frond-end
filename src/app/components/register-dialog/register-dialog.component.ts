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

  @Input() open: boolean;

  @Output() closeDialog = new EventEmitter();

  @Output() moveToLogin = new EventEmitter();

  private isDoctor = false;
  private data: any;
  private provinces: any[] = [];
  private districts: any[] = [];
  private wards: any[] = [];
  private specialists: any[] = [];

  private provinceSelected: any = 'default';
  private districtSelected: any = 'default';
  private wardSelected: any = 'default';
  private specialistSelected: string = 'default';

  private username: string = '';
  private password: string = '';
  private rePassword: string = '';
  private email: string = '';
  private phoneNumber: string = '';
  private birthday: number;
  private name: string = '';
  private gender: string = "male";
  private country: string = "Viet Nam";
  private street: string = '';
  private experiences: number;
  private certificate: string = '';

  private errorMessages: string;

  private errorField: boolean[] = [];

  constructor(
    private localServicesService: LocalServicesService,
    private userServicesService: UserServicesService,
    private spinner: NgxSpinnerService,
    private imageServicesService: ImageServicesService,
  ) { }

  ngOnInit() {
    this.localServicesService.getLocal().subscribe(data => {
      // console.log(data);
      this.data = data;
      for (var i = 0; i < this.data.length; i++) {
        this.provinces[i] = this.data[i];

      }
    })
    this.getSpecialists();
  }
  public changeWordToUnsigned(str: String) {
    str = str.toLowerCase();
    str = str.replace(/á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|à/gm, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ọ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
    str = str.replace(/ + /g, " ");
    str = this.firstUppercaseSentence(str);
    str = str.trim();
    return str;
  }

  public firstUppercaseSentence(st: String) {
    var words: string[] = st.split(" ");
    var sentence = '';
    if (words.length > 0) {
      for (var i = 0; i < words.length; i++) {
        sentence += words[i].charAt(0).toUpperCase() + words[i].slice(1) + " "
      }
      return sentence;
    } else {
      return st.charAt(0).toUpperCase() + st.slice(1);
    }
  }

  public provinceOption(provinceIndex: number) {
    this.provinceSelected = provinceIndex;
    this.districts = [];
    this.districtSelected = 'default';
    this.wardSelected = 'default';
    // console.log(this.provinceSelected);
    for (var i = 0; i < this.provinces[provinceIndex].districts.length; i++) {
      this.districts[i] = this.provinces[provinceIndex].districts[i];
    }
    // console.log(this.districts);
  }

  public districtOption(districtIndex: number) {
    this.districtSelected = districtIndex;
    this.wards = [];
    this.wardSelected = 'default';
    for (var i = 0; i < this.districts[districtIndex].wards.length; i++) {
      this.wards[i] = this.districts[districtIndex].wards[i];
    }
  }

  public wardOption(wardIndex: number) {
    this.wardSelected = wardIndex;
  }
  public toggleRegisterDialog() {
    this.open = !this.open;
    if (this.open == false) {
      this.errorMessages = '';
    }
    this.closeDialog.emit(this.open);

  }

  public toggleIsDoctor() {
    this.isDoctor = !this.isDoctor;
  }

  public register() {
    if (!this.isAllFill()) {
      this.errorMessages = "Please type all fields."
    } else if (!this.comparePassword()) {
      this.errorMessages = "Confirm password not match."
    }
    // else if(!this.isEmailValidated()){
    //   this.errorMessages = "Email is not valid."
    // }
    else if (!this.isPhoneNumberValidated()) {
      this.errorMessages = "Phone number is not valid."
    } else {
      if (!this.isDoctor) {
        this.toggleRegisterDialog();
        this.spinner.show();
        // var birthday = Date.parse(this.birthday+"");
        var data: patientRegister = new patientRegister(this.username, this.password
          , this.email, this.phoneNumber, this.name, null, this.gender,
          this.country, "",
          "",
          "",
          this.street);
        this.userServicesService.patientRegister(data).subscribe(data => {
          this.spinner.hide();
          if (data.success == false) {
            this.errorMessages = data.message;
            this.toggleRegisterDialog();
          } else {

            this.errorMessages = data.message;
            //this.moveToLoginForm();
            this.userServicesService.login(this.username, this.password).subscribe(data => {
              if (data != null) {
                localStorage.setItem("token", JSON.stringify(data.data));
                location.reload();
              }
            });



          }
        },
          error => {
            this.errorMessages = error.status;
            console.log(error);
          })
      } else {
        // if(this.isExperiencesValidated()){
        this.toggleRegisterDialog();
        this.spinner.show();
        // var birthday = Date.parse(this.birthday+"");
        var dataDoctor: doctorRegsiter = new doctorRegsiter(this.username, this.password
          , this.email, this.phoneNumber, this.name, null, this.gender,
          this.country, "",
          "",
          "",
          this.street, "", 0, this.certificate);
        this.userServicesService.doctorRegister(dataDoctor).subscribe(data => {
          this.spinner.hide();
          if (data.success == false) {
            this.errorMessages = data.message;
            this.toggleRegisterDialog();
          } else {
            this.errorMessages = "Admin notification of user awaiting approval.";
            this.moveToLoginForm();
          }
        },
          error => {
            this.errorMessages = error.status;
            console.log(error);
          })
        // }
      }
    }
  }

  public moveToLoginForm() {
    this.moveToLogin.emit(true);
  }

  public isExperiencesValidated() {
    return this.experiences >= 0;
  }

  public isAllFill(): boolean {
    var status = true;
    for (var i = 0; i < 16; i++) {
      this.errorField[i] = true;
    }
    if (this.username.trim() === "") {
      this.errorField[0] = false;
      status = false;
    }
    if (this.password.trim() === "") {
      this.errorField[1] = false;
      status = false;
    }
    if (this.rePassword.trim() === "") {
      this.errorField[2] = false;
      status = false;
    }
    // if(this.email.trim()===""){
    //   this.errorField[3] = false;
    //   status =false;
    // }
    if (this.phoneNumber.trim() == "") {
      this.errorField[4] = false;
      status = false;
    }
    // if(this.country==="default"){
    //   this.errorField[8] = false;
    //   status =false;
    // }
    // if(this.provinceSelected==="default"){
    //   this.errorField[9] = false;
    //   status =false;
    // }
    // if(this.districtSelected==="default"){
    //   this.errorField[10] = false;
    //   status =false;
    // }
    // if(this.wardSelected==="default"){
    //   this.errorField[11] = false;
    //   status =false;
    // }
    // if(this.street.trim()===""){
    //   this.errorField[12] = false;
    //   status =false;
    // }
    // if(this.birthday==null){
    //   this.errorField[5] = false;
    //   status =false;
    // }
    if (this.name.trim() === "") {
      this.errorField[6] = false;
      status = false;
    }

    if (this.isDoctor) {
      // if(this.specialistSelected==="default"){
      //   this.errorField[13] = false;
      //   status =false;
      // }
      if (this.certificate === "") {
        this.errorField[15] = false;
        status = false;
      }
      // if(this.experiences==null){
      //   this.errorField[14] = false;
      //   status =false;
      // }
    }
    return status;
  }

  public comparePassword(): boolean {
    if (this.password === this.rePassword) {
      return true;
    }
    return false;
  }

  public isEmailValidated(): boolean {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(this.email).toLowerCase());
  }

  public isPhoneNumberValidated(): boolean {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,5}$/im;
    return re.test(String(this.phoneNumber).toLowerCase());
  }

  public uploadImage(file: File) {
    // console.log(file.size);
    this.imageServicesService.uploadImage(file).subscribe(data => {
      if (data != null) {
        this.certificate = data.image;
      }
    },
      error => {
        this.errorMessages = error;
        console.log(error);
      })
  }

  public getSpecialists() {
    this.localServicesService.getSpecialists().subscribe(data => {
      this.specialists = data;
    },
      error => {
        console.log(error);
      })
  }

  public specialistOption(specialistIndex) {
    this.specialistSelected = specialistIndex;
  }
}
