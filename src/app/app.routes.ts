import { Routes } from '@angular/router';
import {LandingPageComponent} from "./features/landing-page/landing-page.component";

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/landing-page/landing-page.component').then(mod => mod.LandingPageComponent) },
  { path: 'home', loadComponent: () => import('./features/home-page/home-page.component').then(mod => mod.HomePageComponent) },
  { path: 'sign-up', loadComponent: () => import('./features/sign-up-page/sign-up-page.component').then(mod => mod.SignUpPageComponent) },
  { path: 'sign-in', loadComponent: () => import('./features/sign-in-page/sign-in-page.component').then(mod => mod.SignInPageComponent) },
  { path: 'forgot-password', loadComponent: () => import('./features/forgot-password-page/forgot-password-page.component').then(mod => mod.ForgotPasswordPageComponent) },
];
