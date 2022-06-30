import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {CartItem} from './restaurant-detail/shopping-cart/cart-item.model';
import {MenuItem} from './restaurant-detail/menu-item/menu-item.model';

@Injectable()
export class ShoppingCartService {

  items: CartItem[] = []

  constructor(private http: Http) {
  }

  clear() {
    this.items = []
  }

  addItem(item: MenuItem) {
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)

    if (foundItem) {
      foundItem.quantity = foundItem.quantity + 1;
    } else {
      this.items.push(new CartItem(item))
    }
  }

  removeitem(item: any) {
    this.items.splice(this.items.indexOf(item), 1)
  }

  total(): number {
    return this.items.map( item => item.value())
      .reduce((prev, value)=> prev + value, 0)
  }

}
