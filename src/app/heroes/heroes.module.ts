import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { ImagenPipePipe } from './pipes/imagen-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';


@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HomeComponent,
    ListadoComponent,
    HeroesComponent,
    HeroeTarjetaComponent,
    ImagenPipePipe,
    ConfirmarComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    HeroeTarjetaComponent
  ]
})
export class HeroesModule { }
