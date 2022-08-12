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

  constructor(private active: ActivatedRoute, private serv: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.serv.getUserDetails().subscribe({
      next: data => {
        console.log("logged as " + data.login);
        this.username = data.login;
      } 
    })
  }

  logout() {
    this.serv.logout().subscribe(data => this.router.navigate(['/login']), err => { console.log(err) });
  }
}
