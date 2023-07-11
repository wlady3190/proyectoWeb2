import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/Productos/productos.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css'],
})
export class InventarioComponent{

  constructor(private servicio: ProductosService) {}

  saveProducts(
    id: string,
    producto: string,
    precio: string,
    image: string,
    oferta: string
  ) {
    const ide: number = parseInt(id);
    const pr: number = parseFloat(precio);
    const off: boolean = Boolean(oferta);

    const temp = {
      id: ide,
      producto: producto,
      precio: pr,
      image: image,
      oferta: off,
    };
    this.servicio.postProducto(temp).subscribe((u) => {});

    alert('Producto agregado con éxito!');

  }

  updateProducts(
    id: string,
    producto: string,
    precio: string,
    image: string,
    oferta: string
  ) {
    const ide: number = parseInt(id);
    const pr: number = parseFloat(precio);
    const off: boolean = Boolean(oferta);
    const temp = {
      id: id,
      producto: producto,
      precio: pr,
      image: image,
      oferta: off,
    };
    this.servicio.putProducto(temp, ide).subscribe((u) => {});
  }
  deleteProducts(id: string) {
    const ide: number = parseInt(id);
    this.servicio.deleteProducto(ide).subscribe((u) => {});
  }
}
