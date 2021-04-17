import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService : AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.authService.setToken();
  }

  login() {
    this.authService.login()
  }

}
