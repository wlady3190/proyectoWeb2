import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit{

  constructor(private ruta: Router){}
  ngOnInit(): void {
    this.loginDetection()
  }
  login = 'false';

  logOut() {
    localStorage.clear()
    this.ruta.navigate(['/home'])
    window.dispatchEvent(new CustomEvent('user:logout'))

  }

  loginDetection(){
      window.addEventListener('user:login', ()=>{
        this.checkLoginStatus()
      })
      window.addEventListener('user:logout', ()=>{
        this.checkLoginStatus()
      })
  }

  checkLoginStatus(){
    this.login = localStorage.getItem('login') || 'false';
  }

}
