import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public hide: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login().subscribe(res =>{
      if(res.id){
        this.router.navigate(['/heroes/listado']);
      }else{

      }
    })
  };

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
