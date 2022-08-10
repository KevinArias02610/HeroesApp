import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public heroes: Heroe[] = [];

  constructor(
    private heroesServices: HeroesService
  ) { }

  ngOnInit(): void {
    this.heroesServices.getHeroes().subscribe(res =>{
      this.heroes = res;
    })
  }

}
