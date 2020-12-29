import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path:'home',
		loadChildren:()=>
		import('./customer/components/home-page/home-page.module').then(
			(m) => m.HomePageModule
		),		
	},
	{
		path:'contactus',
		loadChildren:()=>
		import('./customer/components/contactus-page/contactus-page.module').then(
			(m) => m.ContactusPageModule
		),		
	},	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
