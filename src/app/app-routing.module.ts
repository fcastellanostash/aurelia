import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';

const routes: Routes = [
  {
    path: '', 
    component:ProductosComponent

  },
  {
    path: 'productos', 
    component:ProductosComponent

  },
  {
    path: 'sucursales', 
    component:SucursalesComponent
},
  {path: '**', redirectTo : ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
