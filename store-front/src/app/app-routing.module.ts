import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginGuard } from './helper/login.guard';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch:'full' },
    { path: 'login', loadChildren: () => import('../app/login/login.module').then(m => m.LoginModule) },
    { path: 'product', loadChildren: () => import('../app/product/product.module').then(m => m.ProductModule), 
    canActivate: [LoginGuard] }
]

@NgModule({
    imports: [RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule { }


