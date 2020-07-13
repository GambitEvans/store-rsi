import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fileUpload: File;
  registerForm: FormGroup;
  nameFile: string;

  constructor(
     private formBuilder: FormBuilder,
     private productService: ProductService,
     private route:Router,
     ) { }

  ngOnInit() {
    this.form();
  }

  form() {
    this.registerForm = this.formBuilder.group({
      inputName:[''],
      inputPrice: [''],
      inputFile: ['']
    })
  }

  file(files: FileList) {
    this.fileUpload = files.item(0);
    this.nameFile = this.fileUpload.name;
  }

  register() {
    const product = new Product(
      this.registerForm.get('inputName').value,
      this.registerForm.get('inputPrice').value,
      this.fileUpload
    );
    
    this.productService.create(product).subscribe(res => {
      if (res.status === 200) {
        alert("Produto salvo com sucesso.");
        this.route.navigate(['product','search']);
      } else {
        alert("Ocorreu um erro ao salvar.");
      }
    });
  } 
}