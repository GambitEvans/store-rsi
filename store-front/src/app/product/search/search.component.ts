import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, PageEvent, MatPaginator } from '@angular/material';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  dataSource = new MatTableDataSource<Product>();
  displayedColumns: string[] = ['name', 'price', 'remove'];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [10];
  pageEvent: PageEvent;
  skip = 0;
  @ViewChild('pag',{static: true})
  paginator: MatPaginator;
  lsProduct: Product[] = [];

  constructor(
    private productService: ProductService, 
    private router: Router,
    private location: Location) { }

  ngOnInit() {
    this.searchProducts();
  }

  openDialog(id: string): void {
    if(confirm('Deseja mesmo deletar?')) {
      this.productService.delete(id).subscribe(res => {
        if(res.status === 200) {
          alert('Produto removido com sucesso.');
          location.reload();
        } else {
          alert('Ocorreu um erro ao tentar remover o arquivo.');
        }
      });
    }  
  }

  searchProducts() {
    this.productService.search(this.skip).subscribe(({data, total}) => {
      if (data.length > 0) {
        if (this.lsProduct.length !== total) {
          data.map(val => this.lsProduct.push(val));
          this.dataSource.data = this.lsProduct;
          this.dataSource.paginator = this.paginator;
          this.dataSource._updatePaginator(total);
        }
      }
    });
  }

  delete(product) {
    this.openDialog(product._id);
  }

  onPageChange(event: PageEvent){
    if (event.previousPageIndex < event.pageIndex) {
      this.skip +=10;
      this.searchProducts();
    } else {
      this.skip -=10;
      this.searchProducts();
    }    
  }
}