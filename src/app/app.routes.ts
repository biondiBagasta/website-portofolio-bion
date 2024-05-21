import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: "about",
		loadComponent: () => import("./about/about.component").then((m) => m.AboutComponent)
	},
	{
		path: "",
		redirectTo: "about",
		pathMatch: "full"
	}
];
