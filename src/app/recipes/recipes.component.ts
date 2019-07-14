import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes_returned: Object;

  constructor(private data: DataService) {}

  ngOnInit() {
    console.log(this.data.puppy_params);
    this.data.getPuppyData().subscribe(data => {
        this.recipes_returned = data
        console.log(this.recipes_returned);
      }
    );
  }

  clickedStar(title) {
    //console.log(title);
    let key = title;
    //console.log(localStorage.getItem(key));
    if(localStorage.getItem(key)=='TRUE'){
      localStorage.removeItem(key);
    }else{
      localStorage.setItem(key, 'TRUE');
    }
  }

  ifStar(title) {
    let key = title;
    if(localStorage.getItem(key)=='TRUE'){
      return "star fav";
    } else {
      return "star";
    }
  }

}