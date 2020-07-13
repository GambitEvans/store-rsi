import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SingupComponent } from './singup/singup.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'singup', component: SingupComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class LoginRoutingModule {}