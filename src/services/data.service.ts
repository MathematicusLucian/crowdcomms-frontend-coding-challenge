import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  puppy_params: String = "";  
  restItems: any;
  restItemsUrl = 'http://www.recipepuppy.com/api/';

  constructor(private http: HttpClient) { }   

  setPuppyDataParams(chosenIngredients){
    console.log(chosenIngredients); 
    
    this.puppy_params = "";
    var i=0;
    for (let ing of chosenIngredients){
      console.log(ing);
      if(i<(chosenIngredients.length-1)){
        this.puppy_params += ing + ",";
      } else {
        this.puppy_params += ing;
      }
      i++;
    } 
    console.log(this.puppy_params); 
  } 

  // Read all REST Items
  getRestItems(): void {
    console.log("API CALL");
    this.restItems = this.http
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data => data));
  } 

  getPuppyData() {
      console.log(this.puppy_params); 

      console.log(this.restItemsUrl); 
      let newUrl = "http://www.recipepuppy.com/api/?i="+this.puppy_params;
      console.log("N: " + newUrl); 

      if(newUrl != this.restItemsUrl){
        this.restItemsUrl =  newUrl;
        console.log("Does not match cache");  
        this.getRestItems();  
      } 
      console.log(this.restItems);
      return this.restItems;
  }
}