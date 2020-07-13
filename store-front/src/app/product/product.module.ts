import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatBadgeModule, MatMenuModule, MatToolbarModule, MatTableModule, MatIconModule, MatGridListModule, MatPaginatorModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { ProductRoutingModule } from './product-routing.module';
import { HeaderComponent } from '../template/header/header.component';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { JwPaginationComponent, JwPaginationModule } from 'jw-angular-pagination';


@NgModule({
  declarations: [
    RegisterComponent,
    SearchComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    CurrencyMaskModule,
    MatGridListModule,
    MatPaginatorModule,
    JwPaginationModule
  ]
})

export class ProductModule { }
