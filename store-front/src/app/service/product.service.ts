import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
import { ProductResponse } from '../model/product.response';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private api = environment.URL;
  private PRODUCT = 'v1/product/';

  private payload: FormData;

  constructor(private http:HttpClient, private loginService: LoginService) { }

  search(skip): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.api.concat(this.PRODUCT).concat('10/').concat(skip), { headers: this.setHeaders() });
  }

  create(product: Product) {
    this.payload = new FormData();
    this.payload.append('img', product.img);
    this.payload.append('id', product.id);
    this.payload.append('name', product.name);
    this.payload.append('price', product.price.toString());
    return this.http.post<ProductResponse>(this.api.concat(this.PRODUCT), this.payload, { headers: this.setHeaders() }); 
  }

  delete(id: string) {
    return this.http.delete<ProductResponse>(this.api.concat(this.PRODUCT).concat(id), { headers: this.setHeaders() });
  }

  private setHeaders() {
    return  new HttpHeaders({Authorization: `Bearer ${this.loginService.currentUserValue.data.token}`});
  }
}