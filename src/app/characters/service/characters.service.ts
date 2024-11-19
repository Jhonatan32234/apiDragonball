import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Info } from '../interface/info';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private urlDragonBall = "https://dragonball-api.com/api/characters/"


  constructor(private http:HttpClient) { }

  getInfo():Observable<Info[]>{
    return  this.http.get<Info[]>(this.urlDragonBall)
  }

  
}
