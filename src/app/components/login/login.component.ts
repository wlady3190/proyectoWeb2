import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NickService} from 'src/app/services/Nick/nick.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private servicio: NickService, private ruta:Router){}
  nick: string=''
  pass: string = ''

  limpiar() {
    this.nick = '';
    this.pass = '';
  }

  guardarJSON() {
    const temp = {
      correo: this.nick,
      password: this.pass,
    };
    this.limpiar();
    return temp;
  }

  login() {
    const aux = this.guardarJSON();
    // console.log(aux);
    this.servicio.getNick().subscribe((p) => {
      for (let doc of p) {
        if (JSON.stringify(doc.correo) == JSON.stringify(aux.correo) && JSON.stringify(doc.password) == JSON.stringify(aux.password) ) {
          //Seteando variable global a true
          localStorage.setItem('login', 'true');
          
          this.ruta.navigate(['/inventario']);
          console.log('Encontrado');
          break;
        } else {
          console.log('No encontrado');
          
          localStorage.setItem('login', 'false');
          this.ruta.navigate(['/registro']);
        }
      }
    });

  }

}

