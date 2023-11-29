import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './Screens/authentication/authentication.component';
import { HomeComponent } from './Screens/home/home.component';
import { AppComponent } from './app.component';
import { RolesComponent } from './Screens/roles/roles.component';
import { FormComponent } from './Screens/form/form.component';

const routes: Routes = [
  {path: '', component: AuthenticationComponent},
  {path: 'app', component: AppComponent},
  {path: 'home', component: HomeComponent},
  {path: 'roles', component: RolesComponent},
  {path: 'form', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
