import {Injectable} from '@angular/core';
import {RESTAURANT} from './restaurant/restaurant.model';
import {MEAT_API} from '../app.api';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {ErrorHandle} from '../app-error-handle';

@Injectable()
export class RestaurantsService {

  constructor(private http: Http ) {
  }

  restaurants(): Observable<RESTAURANT[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandle.handleError)
  }

  restaurantById(id: string): Observable<RESTAURANT>{
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandle.handleError)
  }

  reviewsOfRestaurant(id: string): Observable<any>{
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandle.handleError)
  }
}
