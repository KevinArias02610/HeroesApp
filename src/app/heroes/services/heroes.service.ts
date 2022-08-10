import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private apiUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getHeroes(){
    return this.http.get<Heroe[]>(`${this.apiUrl}/heroes`);
  }

  getHeroesPorId(id: string): Observable<Heroe>{
    const url = `${this.apiUrl}/heroes/${id}`;
    return this.http.get<Heroe>(url);
  }

  getSugerencias(termino: string): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.apiUrl}/heroes?q=${termino}&_limit=6`);
  }


}
