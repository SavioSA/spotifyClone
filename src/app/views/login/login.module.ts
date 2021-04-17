import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/services/auth.service';





@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatButtonModule,
    HttpClientModule,

  ],
  exports: [
    LoginComponent
  ],
  providers: [
    AuthService

  ]
})
export class LoginModule { }
