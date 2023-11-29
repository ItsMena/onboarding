import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Screens/home/home.component';
import { FormComponent } from './Screens/form/form.component';
import { AuthenticationComponent } from './/Screens/authentication/authentication.component';
import { RolesComponent } from './Screens/roles/roles.component';
import { LottieComponent } from './lottie/lottie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    AuthenticationComponent,
    RolesComponent,
    LottieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
