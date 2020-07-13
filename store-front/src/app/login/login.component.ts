import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private loginService: LoginService,
    private router: Router, 
    private formBuilder:FormBuilder ) { }

  ngOnInit() {
    this.form()
  }

  form() {
    this.loginForm = this.formBuilder.group({
      userInput: [''],
      passInput: ['']
    });
  }

  singIn() {
    const user = new User(
      this.loginForm.get('userInput').value,
      this.loginForm.get('passInput').value
    );
    
    this.loginService.singIn(user).subscribe((res) =>  {
      if(res.status === 200) this.router.navigate(['product', 'register']);
      else {
        alert('Usuário ou senha inválidos');
      }
    });
  }

  register() {
    this.router.navigate(['singup']);
  }
}
