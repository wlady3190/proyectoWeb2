import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/Productos/productos.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent {
constructor(private service: ProductosService){}

dataProductos : any={};

ngOnInit(){
  this.service.getProducto().subscribe(productos=>{this.dataProductos=productos});
}
}
