import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor( private http:HttpClient) { }
  private API_PRODUCTOS='http://0.0.0.0:3000/productos'

  getProducto():Observable<any>{
    return this.http.get(this.API_PRODUCTOS);
    
  }
  postProducto(user:any):Observable<any>{
    return this.http.post(this.API_PRODUCTOS,user)
  }
  putProducto(user:any,id:number):Observable<any>{
    this.API_PRODUCTOS=`${this.API_PRODUCTOS}/${id}`
    return this.http.put(this.API_PRODUCTOS,user)
  }
  deleteProducto(id:number):Observable<any>{
    this.API_PRODUCTOS=`${this.API_PRODUCTOS}/${id}`
    return this.http.delete(this.API_PRODUCTOS)
  }
}
