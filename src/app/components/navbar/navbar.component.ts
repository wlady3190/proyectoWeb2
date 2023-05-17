import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    login = localStorage.getItem('login');
  
  
  logOut(){
    return  this.login = 'false'
  }
  


}
