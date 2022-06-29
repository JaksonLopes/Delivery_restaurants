import {Component, OnInit} from '@angular/core';
import {RestaurantsService} from '../restaurants/restaurants.service';
import {RESTAURANT} from '../restaurants/restaurant/restaurant.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: RESTAURANT

  constructor(private restaurantService: RestaurantsService,
              private activate: ActivatedRoute) {
  }

  ngOnInit() {
    //recuperando id da URL activate.snapshot.parent['id'] TODO recupera valo via url
    this.restaurantService.restaurantById(this.activate.snapshot.parent['id'])
      .subscribe(restaurant => this.restaurant = restaurant)
  }

}
