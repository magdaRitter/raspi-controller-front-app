import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userLbl = "Hi, ";
  doorsLbl = "Doors";
  radioLbl = "Radio";
  alarmLbl= "Alarm";
  systemLbl = "System";
  logoUrl= "assets/raspi.png";
  logoutIcon = "assets/logout.png";
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.getUserDetails().subscribe({
      next: data => {
        this.userLbl += data.name;
      } 
    });
  }

  logout()
  {
    this.authService.logout().subscribe(() => this.router.navigate(['/login']), err => { console.log(err) });
  }
}
