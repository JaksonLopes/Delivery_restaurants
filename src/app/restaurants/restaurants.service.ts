import { Injectable } from '@angular/core';
import {RESTAURANT} from './restaurant/restaurant.model';
import {MEAT_API} from '../app.api';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class RestaurantsService {

  constructor( private http: Http) { }

  restaurants(): Observable<RESTAURANT[]>{
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
  }
}
