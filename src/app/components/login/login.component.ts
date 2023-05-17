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
      for (const doc of p) {
        if (JSON.stringify(doc) == JSON.stringify(aux)) {
          console.log('Encontrado');
          //Seteando variable global a true
          localStorage.setItem('login', 'true');
          this.ruta.navigate(['/inventario']);
          break;
        } else {
          localStorage.setItem('login', 'false');
          this.ruta.navigate(['/registro']);
        }
      }
    });

    //para recargar una pagina, pero elimina credenciales. NO USAR ASI

    // location.reload()
  }

  



}

