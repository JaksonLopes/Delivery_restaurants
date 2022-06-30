import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {MenuItem} from './menu-item.model';


@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input()
  menuItem: MenuItem

  @Output() //Todo forma de emitir um evento
  add = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  emitterEvent() {
    this.add.emit(this.menuItem)
  }
}
