import { Component, OnInit, Input } from '@angular/core';
import { UserServicesService } from './../../services/user-services/user-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() ROLE;
  
  private isLogin:boolean = false;
  private data: any;

  constructor(
    private userServicesService: UserServicesService
  ) { }

  ngOnInit() {
    
    if(localStorage.getItem('token')!=null){
      this.userServicesService.getBasicInfor().subscribe(data=>{
        // console.log(data);
        if(data!=null){
          this.data = data;
          this.isLogin=true;
        }else{
          localStorage.removeItem('token');
        }
      },
      error=>{
        console.log(error);
      })
    }

    
  }

  
}
