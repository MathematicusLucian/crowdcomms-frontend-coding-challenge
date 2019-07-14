import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  ingredients: any[] = [
    {
      "name": "potato", checked: false
    },
    {
      "name": "onions", checked: false
    },
    {
      "name": "garlic", checked: false
    },
    {
      "name": "apple", checked: false
    },
    {
      "name": "flour", checked: false
    },
    {
      "name": "chicken", checked: false
    },
    {
      "name": "mint", checked: false
    },
    {
      "name": "tomato", checked: false
    },
    {
      "name": "parsley", checked: false
    },
    {
      "name": "peas", checked: false
    },
    {
      "name": "tumeric", checked: false
    },
    {
      "name": "rice", checked: false
    },
    {
      "name": "thyme", checked: false
    },
    {
      "name": "yeast", checked: false
    },
    {
      "name": "egg", checked: false
    },
    {
      "name": "bacon", checked: false
    },
    {
      "name": "olives", checked: false
    },
    {
      "name": "lamb", checked: false
    },
    {
      "name": "lentils", checked: false
    },
    {
      "name": "lemon", checked: false
    }
  ];

  recipes_returned: Object; 

  constructor(private data: DataService, private router: Router) {}

  ngOnInit() { 
  }

  chooseRecipe() {

    let chosenIngredients = ["potato"];
    console.log(chosenIngredients);  
    this.data.setPuppyDataParams(chosenIngredients);
    this.router.navigate(['/recipes']); 
  
  }

}