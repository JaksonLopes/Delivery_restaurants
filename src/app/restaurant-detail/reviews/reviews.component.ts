import {Component, OnInit} from '@angular/core';
import {RestaurantsService} from '../../restaurants.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restaurantService: RestaurantsService,
              private active: ActivatedRoute) {
  }

  ngOnInit() {
    this.reviews = this.restaurantService.reviewsOfRestaurant(
      this.active.parent.snapshot.params['id']
    )
  }

}
