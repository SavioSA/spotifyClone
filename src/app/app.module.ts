import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideBarModule } from './components/side-bar/side-bar.module';
import { BottomBarModule } from './components/bottom-bar/bottom-bar.module';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './views/login/login.component';
import { AuthService } from 'src/services/auth.service';
import { AuthInterceptorInterceptor } from './shared/auth-interceptor.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    SideBarModule,
    BottomBarModule,
    MatIconModule,

  ],
  providers: [AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
