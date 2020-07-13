import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  singupForm: FormGroup;

  constructor(private loginService: LoginService,
    private router:Router, 
    private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.form()
  }

  form() {
    this.singupForm = this.formBuilder.group({
      userInput: [''],
      passInput: ['']
    });
  }

  singUp() {
    const user = new User(
      this.singupForm.get('userInput').value,
      this.singupForm.get('passInput').value
    );

    this.loginService.singUp(user).subscribe((res) => {
      if(res.status === 200) {
        alert('Usuário cadastrado com sucesso!');
        this.router.navigate(['']);
      } else {
        alert('Usuário já cadastrado!');
      }
    });
  }
}