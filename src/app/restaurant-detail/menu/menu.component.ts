import {Component, OnInit} from '@angular/core';
import {RestaurantsService} from '../../restaurants.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {MenuItem} from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem>

  constructor(private restaurantService: RestaurantsService,
              private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.menu = this.restaurantService.menuOfRestaurant(this.router.parent.snapshot.params['id'])
  }

  addMenuItem(item: MenuItem) {
    console.log(item)
  }
}
