import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public baseUrl: string = environment.baseUrl;
  public _auth: Auth | undefined;

  get auth(){
    return {...this._auth};
  }

  constructor(
    private http: HttpClient
  ) { }

  login(){
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`).pipe(tap(auth => this._auth = auth));
  }
}
