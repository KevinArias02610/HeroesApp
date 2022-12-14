import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  public termino: string = '';
  public heroes: Heroe[] = [];
  public heroeSeleccionado!: Heroe;

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {}

  buscando() {
    this.heroesService.getSugerencias(this.termino.trim()).subscribe((heroes) => {
      this.heroes = heroes;
    });
  }

  opcionSeleccionada(event: any) {
    if(!event.option.value){
      return;
    }
    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;
    this.heroesService.getHeroesPorId(heroe.id!).subscribe((heroe) => {
      this.heroeSeleccionado = heroe;
    });
  }
}
