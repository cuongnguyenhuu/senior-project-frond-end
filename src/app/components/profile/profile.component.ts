import { Component, OnInit } from '@angular/core';
import { UserServicesService } from './../../services/user-services/user-services.service';
import { DatePipe } from '@angular/common';
import { LocalServicesService } from './../../services/local-services/local-services.service';
import { PatientUpdateResponse } from 'src/app/models/patientUpdateResponse';
import { DoctorUpdateResponse } from 'src/app/models/doctorUpdateResponse';
import { ImageServicesService } from 'src/app/services/image-servives/image-services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public ROLE;
  public data;
  public profile;
  public dataEdit;
  public isEditing = false;
  //infor
  public dataLocal;
  public provinceIndex;
  public provinceName;

  public districtIndex;
  public districtName;

  public wardIndex;
  public wardName;

  public specialists;
  public specialistIndex;

  constructor(
    public userServices: UserServicesService,
    public datePipe: DatePipe,
    public localServices: LocalServicesService,
    public imageServices: ImageServicesService
  ) { }

  ngOnInit() {
    this.ROLE = JSON.parse(localStorage.getItem("token")).role[0].authority;
    if (this.ROLE == 'ROLE_DOCTOR') {
      this.userServices.getDoctorProfile().subscribe(dataInput => {
        console.log(dataInput);
        this.data = dataInput;
        this.profile = dataInput.account;
        this.data.account.birthday = this.datePipe.transform(this.data.account.birthday, 'yyyy-MM-dd');
        this.provinceName = this.data.account.address.city;
        this.districtName = this.data.account.address.locality;
        this.wardName = this.data.account.address.ward;
      },
        error => {
          console.log(error);
        })
    }
    if (this.ROLE == 'ROLE_PATIENT') {
      this.userServices.getPatientProfile().subscribe(dataInput => {
        console.log(dataInput);
        this.data = dataInput;
        this.profile = dataInput.profilePatient;
        this.data.profilePatient.birthday = this.datePipe.transform(this.data.profilePatient.birthday, 'yyyy-MM-dd');
        this.provinceName = this.data.profilePatient.address.city;
        this.districtName = this.data.profilePatient.address.locality;
        this.wardName = this.data.profilePatient.address.ward;
      },
        error => {
          console.log(error);
        })
    }
    this.localServices.getLocal().subscribe(data => {
      this.dataLocal = data;
      // console.log(data);
    });
    this.localServices.getSpecialists().subscribe(data => {
      this.specialists = data;
    })
  }

  public changeToEdit() {
    this.dataEdit = this.data;
    if (this.provinceName == "") {
      this.provinceIndex = 0
    } else
      for (let index = 0; index < this.dataLocal.length; index++) {
        if (this.changeWordToUnsigned(this.dataLocal[index].name) == this.provinceName) {
          this.provinceIndex = index;
        }
      }
    if (this.districtName == "") {
      this.districtIndex = 0
    } else
      for (let index = 0; index < this.dataLocal[this.provinceIndex].districts.length; index++) {
        if (this.changeWordToUnsigned(this.dataLocal[this.provinceIndex].districts[index].name) == this.districtName) {
          this.districtIndex = index;
        }
      }
    if (this.wardName == "") {
      this.wardIndex = 0
    } else
      for (let index = 0; index < this.dataLocal[this.provinceIndex].districts[this.districtIndex].wards.length; index++) {
        if (this.changeWordToUnsigned(this.dataLocal[this.provinceIndex].districts[this.districtIndex].wards[index].name) == this.wardName) {
          this.wardIndex = index;
        }
      }
    if (this.data.major == "") {
      this.specialistIndex = 0;
    }
    for (let index = 0; index < this.specialists.length; index++) {
      if (this.specialists[index].name == this.data.major) {
        this.specialistIndex = index;
      }
    }
    this.isEditing = true;
  }

  public updateAvatar(file) {
    this.imageServices.uploadImage(file).subscribe(data => {
      console.log(data);
      if (data != null) {
        this.imageServices.updateAvatar(data.image).subscribe(data => {
          if (data != null) {
            this.profile = data;
            var token = JSON.parse(localStorage.getItem("token"));
            token.avatar = this.profile.avatar;
            localStorage.setItem("token", JSON.stringify(token));
          }
        })
      }
    }, error => {
      console.log(error);
    })
  }

  public printName(){
    console.log(this.dataEdit.profilePatient.name);
  }

  public update() {
    // console.log(new Date(this.data.account.birthday).getTime());
    // console.log(this.data.account.gender);
    // console.log(this.changeWordToUnsigned(this.dataLocal[this.provinceIndex].name));
    // console.log(this.changeWordToUnsigned(this.dataLocal[this.provinceIndex].districts[this.districtIndex].name));
    // console.log(this.changeWordToUnsigned(this.dataLocal[this.provinceIndex].districts[this.districtIndex].wards[this.wardIndex].name));
    // console.log(this.specialists[this.specialistIndex].name);
    console.log(this.dataEdit);
    if (this.ROLE == 'ROLE_PATIENT') {
      var updatePatientProfile: PatientUpdateResponse = new PatientUpdateResponse(
        this.dataEdit.profilePatient.name, this.dataEdit.profilePatient.email, new Date(this.dataEdit.profilePatient.birthday).getTime(),
        this.dataEdit.profilePatient.gender, this.dataEdit.profilePatient.phoneNumber, this.dataEdit.profilePatient.address.country,
        this.changeWordToUnsigned(this.dataLocal[this.provinceIndex].name), this.changeWordToUnsigned(this.dataLocal[this.provinceIndex].districts[this.districtIndex].name),
        this.changeWordToUnsigned(this.dataLocal[this.provinceIndex].districts[this.districtIndex].wards[this.wardIndex].name),
        this.dataEdit.profilePatient.address.addressLine, this.dataEdit.history_diseases);
      this.userServices.updatePatientProfile(updatePatientProfile).subscribe(data => {
        console.log(data);
        this.ngOnInit();
      }, error => {
        console.log(error);
      });
    }
    else {
      var updateDoctorProfile: DoctorUpdateResponse = new DoctorUpdateResponse(
        this.dataEdit.account.name, this.dataEdit.account.email, new Date(this.dataEdit.account.birthday).getTime(),
        this.dataEdit.account.gender, this.dataEdit.account.phoneNumber, this.dataEdit.account.address.country,
        this.changeWordToUnsigned(this.dataLocal[this.provinceIndex].name), this.changeWordToUnsigned(this.dataLocal[this.provinceIndex].districts[this.districtIndex].name),
        this.changeWordToUnsigned(this.dataLocal[this.provinceIndex].districts[this.districtIndex].wards[this.wardIndex].name),
        this.dataEdit.account.address.addressLine, this.specialists[this.specialistIndex].name, this.dataEdit.experiences);
      this.userServices.updateDoctorProfile(updateDoctorProfile).subscribe(data => {
        console.log(data);
        this.ngOnInit();
      }, error => {
        console.log(error);
      });
    }
    this.isEditing = false;
  }

  public cancel() {
    this.isEditing = false;
    this.ngOnInit();
  }

  public changeWordToUnsigned(str: string) {
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

  public optionGender(value) {
    if (this.ROLE == "ROLE_PATIENT")
      this.data.profilePatient.gender = value;
    else {
      this.data.account.gender = value;
    }
  }

  public optionProvince(index) {
    this.provinceIndex = index;
  }

  public optionDistrict(index) {
    this.districtIndex = index;
  }

  public optionWard(index) {
    this.wardIndex = index;
  }

  public optionSpecialist(index) {
    this.specialistIndex = index;
  }
}
