import { Component, OnInit, Input } from '@angular/core';
import { UserServicesService } from './../../services/user-services/user-services.service';
import { Router } from '@angular/router';

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
    private userServicesService: UserServicesService,
    private router:Router
  ) { }

  ngOnInit() {
    if(localStorage.getItem('token')!=null){
      this.data = JSON.parse(localStorage.getItem('token'));
      for(var i =0; i<this.data.role.length;i++){
        if(this.data.role[i].authority==='ROLE_ADMIN'){
          this.router.navigateByUrl('/admin');
          break;
        }
        else if(this.data.role[i].authority==='ROLE_DOCTOR'){
          this.router.navigateByUrl('/doctor');
          break;
        }
        else{
          this.router.navigateByUrl(window.location.pathname);
          break;
        }
      }
      this.isLogin = true;
      this.userServicesService.checkTokenValidate().subscribe(data=>{
      }
      ,error=>{
        this.isLogin=false;
        localStorage.removeItem('token');
      })
    }
    else{
      this.router.navigateByUrl('/patient/home');
    }  
  }

  public setDataLogin(data){
    this.data = data;
    this.isLogin = true;
    // console.log("aaa"+data);
  }
  
}
