import { Component, OnInit } from '@angular/core';
import { HomeComponentAnimations } from './home.animations';

// This is needed to import the service for data exchange
import { DataService } from '../data.service';

@Component
({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {

    // an example of how to define a variable and use in HTML template, its used by placing {{itemCount}} into HTML templace where needed
    itemCount: number;
    btnText: string = "Add an Item";
    goalText: string = '';
    goals = [];

  constructor(private _data: DataService) { }

  ngOnInit()
  {
      // this call, basically from the data service layer picks on the observable object goal in service which is looking at goals array
      // in the data service and it gets returned in the res param which then can be equated to this.goals which is displayed by Home 
      // component by looping through it in one of the HTML elements in the template.
      this._data.goal.subscribe(res => this.goals = res);
      this._data.changeGoal(this.goals);
      this.itemCount = this.goals.length; 
  }

    // This is an event callback function we created that is used inside the HTML onClick for form input type button
    // here we pick the text from the goalText variable which was earlier bound to the form input type text (this is the
    // same as what is entered into the text box). Once picked its added to the array. In another location in HTML tmpl
    // we use all the array values and display them inside of a div by looping through each array.
    addItem()
    {
        // window.alert("addItem()");
        this.goals.push(this.goalText);
        this.goalText = '';
        this.itemCount = this.goals.length;

        // whenever there is change from component HTML, you need to inform DataService, below statement does that
        this._data.changeGoal(this.goals);
    }

    removeItem(i: number)
    {
        this.goals.splice(i, 1);

        // whenever there is change from component HTML, you need to inform DataService, below statement does that
        this._data.changeGoal(this.goals);
    }
}
