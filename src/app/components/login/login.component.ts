import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserServicesService } from 'src/app/services/user-services/user-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() tranforDataLogin = new EventEmitter();

  private username: string = '';
  private password: string = '';
  private errorMessage: string = '';
  private isCoverPassword: boolean = true;
  private data: any;
  private errorField: boolean[]=[];

  constructor(
    private userServicesService: UserServicesService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public login() {
    this.spinner.show();
    // this.toggleLoginDialog();
    if (this.validate() != null) {
      this.errorMessage = this.validate();
      // this.toggleLoginDialog();
      this.spinner.hide();
    }
    else {
      this.userServicesService.login(this.username, this.password).subscribe(data => {
        // console.log(data);
        this.tranforDataLogin.emit(data);
        this.spinner.hide();
        localStorage.setItem("token", JSON.stringify(data));
        for (var i = 0; i < data.role.length; i++) {
          if (data.role[i].authority === 'ROLE_ADMIN') {
            this.router.navigateByUrl('/admin');
            break;
          }
          else if (data.role[i].authority === 'ROLE_DOCTOR') {
            this.router.navigateByUrl('/doctor');
            break;
          }
          else {
            this.router.navigateByUrl('/patient');
            break;
          }
        }
      },
        error => {
          console.log("error", error.status);
          this.spinner.hide();
          if (error.status === 401) {
            this.errorMessage = 'Username or Password is incorrect.'
          }
          else {
            this.errorMessage = 'Error code ' + error.status;
          }
          // this.toggleLoginDialog();
        });
    }
  }

  public validate(): string {
    this.errorField[0] = true;
    this.errorField[1] = true;
    if (this.username === '' && this.password === '') {
      this.errorField[0] = false;
      this.errorField[1] = false;
      return 'Username and Password are blank.'
    } else if (this.username === '') {
      this.errorField[0] = false;
      return 'Username are blank.'
    } else if (this.password === '') {
      this.errorField[1] = false;
      return 'Password are blank.'
    }

    return null;
  }

  public toggleCoverPassword() {
    this.isCoverPassword = !this.isCoverPassword;
  }
}
