import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() { }

  navSearch() {
    this.router.navigate(['product','search']);
  }
  
  navRegisterProduct() {
    this.router.navigate(['product','register']);
  }

  navCheckout(){
    if(confirm('Deseja realmente sair?')){
      localStorage.clear();
      this.router.navigate(['']);
    }
  }
}
