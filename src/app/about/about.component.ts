import { Component, OnInit } from '@angular/core';

// This import is added to pick up values from the route parameter (Eg Id and Name that we have added to app-module)
import { ActivatedRoute } from '@angular/router';

// when you need to programtically change the route you need to work with the Router component, so it needs to be imported
import { Router } from '@angular/router';

// This is needed to import the service for data exchange
import { DataService } from '../data.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goals: any;

  // adding ActivatedRoute to the component so that it can be used
  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) 
  {
        // this will first listen to the params, then pick up the response and from that pick id as the param
        // console.log willl show the output on the browser eg in chrome if you open dev tools and goto console , you will see it 
        this.route.params.subscribe(res => console.log(res.id + " " + res.name)); 
  }

  ngOnInit() 
  {
    this._data.goal.subscribe(res => this.goals = res);
  }

  // a function that works on router and can be called on any event
  sendMeHome()
  {
      // navigate accepts an array of path so since we want it to go home, we set the path to empty
      this.router.navigate(['']);
  }
}
