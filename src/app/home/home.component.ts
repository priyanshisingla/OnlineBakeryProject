import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { PRODUCT } from '../product-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Product = PRODUCT;

  constructor() { }

  ngOnInit(): void {
    
  }

}
