import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/app/services/user-services/user-services.service';

@Component({
  selector: 'app-requirement',
  templateUrl: './requirement.component.html',
  styleUrls: ['./requirement.component.css']
})
export class RequirementComponent implements OnInit {

  private textSearch;
  private sortBy;
  private page;
  private totalPages;
  private currentpage;
  private result;
  constructor(
    private userService:UserServicesService
  ) { }

  ngOnInit() {
    this.textSearch = "";
    this.sortBy = "lastest";
    this.page = 0;
    this.userService.getApprovingAccounts(this.textSearch,this.sortBy,this.page).subscribe(data=>{
      console.log(data);
      if(data!=null){
        this.totalPages = data.totalPages;
        this.currentpage = data.currentpage;
        this.result = data.result
      }
    })
  }

  public setSortBy(value){
    this.sortBy = value;
  }
  
  public search(){
    this.userService.getApprovingAccounts(this.textSearch,this.sortBy,this.page).subscribe(data=>{
      console.log(data);
      if(data!=null){
        this.totalPages = data.totalPages;
        this.currentpage = data.currentpage;
        this.result = data.result
      }
    })
  }
  public approve(username){
    this.userService.setApprovingAccount(username).subscribe(data=>{
      console.log(data);
      this.ngOnInit();
    })
  }
}
