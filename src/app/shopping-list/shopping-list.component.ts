import { ShoppingService } from './shopping-list.service';
import { Ingredients } from './../shared/ingredients.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredients[];

  constructor(private slService:ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();  
  }

}
