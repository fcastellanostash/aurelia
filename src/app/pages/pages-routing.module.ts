import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';


const routes : Routes = [
  {
    path: '',
    component: HomeComponent, 
    children: [
      {
        path: 'productos',
        component: ProductosComponent
      },
      // {
      //   path: 'nosotros',
      //   component: AgregarComponent 
      // },
      // {
      //   path: 'editar/:id',
      //   component: AgregarComponent 
      // },
      // {
      //   path: 'buscar',
      //   component: BuscarComponent 
      // },
      // {
      //   path: ':id',
      //   component: HeroeComponent 
      // },
      {
        path: '**',
        redirectTo: 'productos' 
      }

    ]
  
  
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
    ],
    exports:[
      RouterModule
    ]
})
export class HeroesRoutingModule { }
