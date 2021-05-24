import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi1.wp.com%2Fwww.eatthis.com%2Fwp-content%2Fuploads%2F2019%2F10%2Fpumpkin-pad-thai-recipe.jpg%3Ffit%3D1200%252C879%26ssl%3D1&imgrefurl=https%3A%2F%2Fwww.eatthis.com%2Fpumpkin-pad-thai-recipe%2F&tbnid=GBAVCoE5xe5IzM&vet=12ahUKEwjEvKCLp-LwAhUHyxQKHXNhDA0QMygPegUIARD5AQ..i&docid=QMnsM5hwEZckHM&w=1200&h=879&q=recipe&ved=2ahUKEwjEvKCLp-LwAhUHyxQKHXNhDA0QMygPegUIARD5AQ')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
