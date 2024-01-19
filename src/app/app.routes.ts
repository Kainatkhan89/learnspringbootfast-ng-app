import { Routes } from '@angular/router';
import {LandingPageComponent} from "./features/landing-page/landing-page.component";

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/landing-page/landing-page.component').then(mod => mod.LandingPageComponent) },
  { path: 'home', loadComponent: () => import('./features/home-page/home-page.component').then(mod => mod.HomePageComponent) },
  { path: 'sign-up', loadComponent: () => import('./features/sign-up-page/sign-up-page.component').then(mod => mod.SignUpPageComponent) },
];
