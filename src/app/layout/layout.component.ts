import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/AuthService';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isLoggedIn: boolean = localStorage.getItem('user') != '' && localStorage.getItem('user') != null;
  loggedInUser = this.isLoggedIn ? JSON.parse(localStorage.getItem('user')!) : null;
  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {}

  loggout(): void {
    this.authService.doLogout().then(() => this.router.navigate(['/login']));
    localStorage.setItem('user', '');
  }
}
