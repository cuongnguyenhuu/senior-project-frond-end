import { Component, OnInit } from '@angular/core';
import { UserServicesService } from './../../../../services/user-services/user-services.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public textSearch:string;
  public role:string;
  public status:string;
  public page:number;
  public data;
  public totalPages;
  public currentPage;
  constructor(
    public userServices: UserServicesService
  ) { }

  ngOnInit() {
    this.textSearch="";
    this.role="all";
    this.status="all";
    this.page=0;
    this.userServices.getAllUsers(this.textSearch,this.role,this.status,this.page).subscribe(data=>{
      console.log(data);
      this.data = data.result;
      this.totalPages = data.totalPages;
      this.currentPage = data.currentPage;
    },error=>{
      console.log(error);
    })
  }

  public setStatus(value){
    this.status = value;
    this.search();
  }

  public setRole(value){
    this.role = value;
    this.search();
  }

  public search(){
    this.userServices.getAllUsers(this.textSearch,this.role,this.status,this.page).subscribe(data=>{
      console.log(data);
      this.data = data.result;
      this.totalPages = data.totalPages;
      this.currentPage = data.currentPage;
    },error=>{
      console.log(error);
    })
  }
}
