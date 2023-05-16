import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/Productos/productos.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private service:ProductosService){}
  dataProductos : any={};
  ngOnInit(){
    this.service.getProducto().subscribe(productos=>{this.dataProductos=productos});
  }

}
