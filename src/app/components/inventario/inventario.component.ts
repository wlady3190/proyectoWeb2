import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/Productos/productos.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {
  // ngOnInit(){

  //   return localStorage.setItem('login','true')
  // }
  constructor(private servicio:ProductosService){}

  saveProducts(id:string,producto:string,precio:string,image:string, oferta:string){
    const ide: number=parseInt(id);
    const pr: number=parseFloat(precio)
    const off: boolean=Boolean(oferta)
    const temp={
     
      "id":id,
      "producto":producto,
      "precio":precio,
      "image":image,
      "oferta":oferta
    }
    this.servicio.postProducto(temp).subscribe(u=>{})
  }
  updateProducts(id:string,producto:string,precio:string,image:string, oferta:string){
    const ide: number=parseInt(id);
    const pr: number=parseFloat(precio)
    const off: boolean=Boolean(oferta)
    const temp={
     
      "id":id,
      "producto":producto,
      "precio":precio,
      "image":image,
      "oferta":oferta
    }
    this.servicio.putProducto(temp,ide).subscribe(u=>{})
  }
  deleteProducts(id:string){
    const ide: number=parseInt(id);
      this.servicio.deleteProducto(ide).subscribe(u=>{})
  }



}
