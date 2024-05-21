import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: "about",
		loadComponent: () => import("./about/about.component").then((m) => m.AboutComponent)
	},
	{
		path: "resume",
		loadComponent: () => import("./resume/resume.component").then((m) => m.ResumeComponent)
	},
	{
		path: "works",
		loadComponent: () => import("./works/works.component").then((m) => m.WorksComponent)
	},
	{
		path: "",
		redirectTo: "about",
		pathMatch: "full"
	}
];
