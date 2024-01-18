import { Routes } from '@angular/router';
import {LandingPageComponent} from "./features/landing-page/landing-page.component";

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/landing-page/landing-page.component').then(mod => mod.LandingPageComponent) },
];
