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

}
