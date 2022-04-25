import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  
  productos : Producto [] = [];
  
  constructor(private _productoservice : ProductosService
    ) { }

  ngOnInit(): void {

    this._productoservice.getProductos().subscribe(
      productos => this.productos = productos
    )

  }

}
