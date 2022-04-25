import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Producto } from '../models/producto.model';
import { Sucursal } from '../models/sucursal.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private baseUrl : string = environment.baseUrl;
  constructor( private http : HttpClient) { }

  getProductos():Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.baseUrl}/data.json`);
  }


  getSucursales():Observable<Sucursal[]>{
    return this.http.get<Sucursal[]>(`${this.baseUrl}/sucursales.json`);
  }

}
