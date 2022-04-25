import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { Sucursal } from 'src/app/models/sucursal.model';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styles: [ `
  .map-container{
    width: 100vw;
    height: 100vh;
  }

  ul{
    position:fixed;
    right:20px;
    top:70px;
    border-radius:5px;
    z-index:9999;
    padding:0px;
    list-style:none
  }
  li{
    cursor: pointer;
    padding: 5px;
    color: white;
  }
  `
  ]
})
export class SucursalesComponent implements AfterViewInit {


  @ViewChild('mapa') divMapa! : ElementRef;
  map! : mapboxgl.Map;
  zoomLevel : number = 15;
  center: [number,number] = [ -58.4052924415417, -34.75494439558738];
  marcadores: Sucursal[] = [];
  constructor(private productosService : ProductosService) { }

  ngAfterViewInit(): void {
  
    this.productosService.getSucursales().subscribe(
      sucursales => {
        console.log("sucursales", sucursales)
        sucursales.forEach( m => {

          const marker : mapboxgl.Marker = new mapboxgl.Marker({
            draggable:false,
            color:m.color
          })
          .setLngLat(m.center!)
          .addTo(this.map);
          
          this.marcadores.push({
            color:m.color,
            marker,
            center:m.center,
            nombre : m.nombre
          });
    
        })

      }


    )

    this.map = new mapboxgl.Map({
    container: this.divMapa.nativeElement,
    style: 'mapbox://styles/mapbox/streets-v11',
    center:this.center,
    zoom: this.zoomLevel
    });  
  }

  

  irMarcador(marcador : mapboxgl.Marker){

    this.map.flyTo(
      {
        center: marcador.getLngLat()
      }
    )
  }

}
