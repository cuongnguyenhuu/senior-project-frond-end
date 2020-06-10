import { Component, OnInit } from '@angular/core';
import { ImageServicesService } from 'src/app/services/image-servives/image-services.service';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {

  public listImage:String[] =[];
  public name="";
  public description="";
  public messageError="";
  constructor(
    public imageServicesService: ImageServicesService,
  ) { }

  ngOnInit() {
  }

  public uploadImage(file:File){
    this.imageServicesService.uploadImage(file).subscribe(data=>{
      if(data!==null){
        console.log(data)
        this.listImage[this.listImage.length] = data.image;
      }
    },
    error=>{
      console.log(error);
    })
  }

  public deleteImage(image){
    var index = this.listImage.indexOf(image);
    if(index>-1){
      this.listImage.splice(index,1);
    }
  }

  public addDisease(){
    if(this.name.trim()!=""||this.description.trim()!=""||this.listImage.length!=0){
      this.imageServicesService.addDisease(this.listImage,this.name,this.description).subscribe(data=>{
        this.name="";
        this.description="";
        this.listImage = [];
        this.messageError="Thank you for your contribution!"
        console.log(data);
      },error=>{
        console.log(error);
      })
    }else{
      this.messageError = "Please fill out all fields!"
    }
  }
}
