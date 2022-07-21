import { Component, OnInit } from '@angular/core';
import {RadioOption} from '../../shared/radio/Radio.option.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  paymentOption: RadioOption[] = [
    {label: "Dinheiro", value: "MON"},
    {label: "Cartão de Débito", value: "DEB"},
    {label: "Cartão de Refeição", value: "REF"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
