import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData={
    username:'',
    password:''
  }
  constructor(private snack:MatSnackBar, private login:LoginService, private router:Router) { }

  ngOnInit(): void {
  }
  formSubmit(){
    console.log('login btn clicked')

    if (this.loginData.username.trim()=='' || this.loginData.username==null)
    {  
      this.snack.open('Username is Required !!','ok',{
        duration:3000,
      });
      return;
    }
    if (this.loginData.password.trim()=='' || this.loginData.password==null)
    {     
      this.snack.open('password is Required !!','ok',{
        duration:3000,
      });
      return;
    }

    //request to server to genrate token... 
    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log('success');
        console.log(data);

        //login...
        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe((user:any)=>{
          this.login.setUser(user);
          console.log(user);          
          //redirect... ADMIN: admin-dashboard
          if (this.login.getUserRole()=='Admin'){
            //admin dashboard
            //window.location.href = '/admin';
            this.router.navigate(['admin'])
            this.login.loginStatusSubject.next(true)
          }
          //redirect... User: User-dashboard
          else if (this.login.getUserRole()=='User'){
            //user dashboard
            //window.location.href = '/user';
            this.router.navigate(['user'])
            this.login.loginStatusSubject.next(true)
          }
          //redirect... Analyst: analyst-dashboard
          else if(this.login.getUserRole()=='Analyst'){
            //analyst dashboard
            //window.location.href='/analyst'
            this.router.navigate(['analyst'])
            this.login.loginStatusSubject.next(true)
          }else{
            this.login.logout();
          }
          });


      },
      (error)=>{
        console.log("Error !!");
        console.log(error);
        this.snack.open("Invalid details !! try again",'ok',{
          duration:3000,
        })
      }
    )
  }
}
