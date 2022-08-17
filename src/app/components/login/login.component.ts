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
    this.serv.getAuthPage().subscribe({
      next: data => {
        this.authUrl = data.authUrl;
      }
    });
  }

  login() {
    this.router.navigate(['/authorize'], { queryParams: { url: this.authUrl } });
  }
}
