import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logoIcon = "assets/raspi.png";
  githubIcon = "assets/github.png";
  authUrl: string | undefined;
  sub!: Subscription;
  
  constructor(private serv: AuthService, private router: Router) { }

  ngOnInit() {
    console.log("login on init");
    this.serv.getAuthPage().subscribe({
      next: data => {
        this.authUrl = data.authUrl;
      }
    });
  }

  login() {
    console.log("loggin in, this.AuthUrlData = " + this.authUrl)
    this.router.navigate(['/authorize'], { queryParams: { url: this.authUrl } });
  }
}
