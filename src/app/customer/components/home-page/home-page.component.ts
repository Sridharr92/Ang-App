import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
 list = [
  	{
  		listData:'Switchboard upgrades'
  	},
  	{
  		listData:'Led Lighting'	
  	},
  	{
  		listData:'Emergency Services'	
  	},
  	{
  		listData:'Powerpoints'	
  	},
  	{
  		listData:'Wiring & Rewiring'	
  	},
  	{
  		listData:'Outlets/Switches/Fixtures'	
  	},
  	{
  		listData:'Outdoor Lighting'	
  	},
  	{
  		listData:'Plumbing Work'	
  	},
  	{
  		listData:'Gas & Current Geezer Fitting'	
  	},
  	{
  		listData:'A.C & Refrigerator Service'	
  	},
  	{
  		listData:'Motor & Pump Set Works'	
  	},
  	{
  		listData:'Solar Work'	
  	},
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  contactRed(){
    this.router.navigate(['./contactus']);
  }
}
