import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  user: any = {};
  error='';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  doLogin(){
    var username = this.user.username;
    var password = this.user.password;
    if(username=='sandeep' && password=='admin'){
       console.log("Login success");
       this.error='';
       this.router.navigate(['school']);
    }else{
       console.log("Login Failed");
       this.error = 'Username or password is incorrect';
    }
  }

  

}
