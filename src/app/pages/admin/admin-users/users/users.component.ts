import { Component, OnInit } from '@angular/core';
import { UserServicesService } from './../../../../services/user-services/user-services.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private textSearch:string;
  private role:string;
  private status:string;
  private page:number;
  private data;
  private totalPages;
  private currentPage;
  constructor(
    private userServices: UserServicesService
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
  }

  public setRole(value){
    this.role = value;
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
