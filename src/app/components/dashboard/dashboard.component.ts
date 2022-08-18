import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username = "";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.getUserDetails().subscribe({
      next: data => {
        this.username = data.login;
      } 
    })
  }

  logout() {
    this.authService.logout().subscribe({
      next: data => this.router.navigate(['/login']),
      error: err => console.log(err)
    })
  }
}
