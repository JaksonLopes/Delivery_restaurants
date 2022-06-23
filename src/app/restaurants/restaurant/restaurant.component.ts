import {Component, Input, OnInit} from '@angular/core';
import {RESTAURANT} from './restaurant.model';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  @Input()
  restaurant: RESTAURANT

  constructor() {
  }

  ngOnInit() {
  }

}
