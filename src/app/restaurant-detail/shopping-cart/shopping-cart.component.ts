import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from '../../shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor( private shoppingService: ShoppingCartService) { }

  ngOnInit() {
  }
  items(): any{
    return this.shoppingService.items
  }
  total(): number{
    return this.shoppingService.total()
  }

  clear() {
    this.shoppingService.clear()
  }

  removeItem(item: any) {
    this.shoppingService.removeitem(item)
  }

  addItem(item: any){
    this.shoppingService.addItem(item)
  }
}
