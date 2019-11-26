import { Component, OnInit } from '@angular/core';
import { LocalServicesService } from './../../../../services/local-services/local-services.service';
import { ScheduleService } from './../../../../services/schedule-services/schedule.service';

@Component({
  selector: 'app-find-doctors',
  templateUrl: './find-doctors.component.html',
  styleUrls: ['./find-doctors.component.css']
})
export class FindDoctorsComponent implements OnInit {

  private textSearch = '';
  private provinces:any[] = [];
  private data:any;
  private specialists:any;
  private provinceSelected:any = 'all';
  private districts:any;
  private districtSelected:any ='all' ;
  private wardSelected:any;
  private specialistSelected:any = 'all';
  private countrySelected = 'Viet Nam';
  private doctors:any;
  private isLoading:boolean;

  constructor(
    private localServicesService: LocalServicesService,
    private scheduleService: ScheduleService
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
    this.searchDoctors();
  }

  public changeWordToUnsigned(str:String){
    str = str.toLowerCase();
    str = str.replace(/á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|à/gm,"a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ọ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    str = str.replace(/ + /g," ");
    str = this.firstUppercaseSentence(str);
    str = str.trim(); 
    return str;
  }

  public firstUppercaseSentence(st:String){
    var words:string[] = st.split(" ");
    var sentence ='';
    if(words.length>0){
      for(var i = 0; i<words.length; i++){
        sentence += words[i].charAt(0).toUpperCase() + words[i].slice(1)+ " "
      }
      return sentence;
    }else{
      return st.charAt(0).toUpperCase() + st.slice(1);
    }
  }

  public getSpecialists(){
    this.localServicesService.getSpecialists().subscribe(data=>{
      this.specialists = data;
      // console.log(this.specialists.length);
    },
    error=>{
      console.log(error);
    })
  }

  public provinceOption(provinceIndex){
    this.provinceSelected = provinceIndex;
    this.districts = [];
    this.districtSelected = 'all';
    // console.log(this.provinceSelected);
    if(provinceIndex!='all')
    for(var i =0; i<this.provinces[provinceIndex].districts.length; i++){
      this.districts[i] = this.provinces[provinceIndex].districts[i];
    }
    // console.log(this.districts);
    this.searchDoctors();
  }

  public districtOption(districtIndex){
    this.districtSelected = districtIndex;
    this.searchDoctors();
  }

  public specialistOption(specialistIndex){
    this.specialistSelected = specialistIndex;
    this.searchDoctors();
  }

  public searchDoctors(){
    this.isLoading = true;
    var specialist, province, district;
    if(this.specialistSelected=='all'){
      specialist ='';
    }else{
      specialist = this.changeWordToUnsigned(this.specialists[this.specialistSelected].name);
    }
    if(this.provinceSelected =='all'){
      province = '';
    }else{
      province = this.changeWordToUnsigned(this.provinces[this.provinceSelected].name);
    }
    if(this.districtSelected =='all'){
      district = '';
    }else{
      district = this.changeWordToUnsigned(this.districts[this.districtSelected].name);
    }
    this.scheduleService.getFindingDoctors(this.textSearch,specialist,this.countrySelected,province,district).subscribe(data=>{
      console.log(data);
      this.isLoading = false;
      this.doctors = data;
    }
    ,error=>{
      console.log(error);
    });
  }
}
