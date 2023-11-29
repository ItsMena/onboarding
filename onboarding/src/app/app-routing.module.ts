import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './Screens/authentication/authentication.component';
import { HomeComponent } from './Screens/home/home.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component: AuthenticationComponent},
  {path: 'app', component: AppComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
