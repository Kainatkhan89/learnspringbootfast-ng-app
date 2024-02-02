import { Routes } from '@angular/router';
import {signedInGuard} from "./core/guards/signed-in.guard";
import {signedOutGuard} from "./core/guards/signed-out.guard";
import {tutorialPageResolver} from "./core/resolvers/tutorial-page.resolver";

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/landing-page/landing-page.component').then(mod => mod.LandingPageComponent), canActivate: [signedOutGuard] },
  { path: 'home', loadComponent: () => import('./features/home-page/home-page.component').then(mod => mod.HomePageComponent), canActivate: [signedInGuard] },
  { path: 'tutorials/:tutorialId',
    loadComponent: () => import('./features/tutorial-page/tutorial-page.component').then(mod => mod.TutorialPageComponent),
    resolve: { tutorialPageData: tutorialPageResolver },
    canActivate: [signedInGuard] },
  { path: 'sign-up', loadComponent: () => import('./features/sign-up-page/sign-up-page.component').then(mod => mod.SignUpPageComponent), canActivate: [signedOutGuard] },
  { path: 'sign-in', loadComponent: () => import('./features/sign-in-page/sign-in-page.component').then(mod => mod.SignInPageComponent), canActivate: [signedOutGuard] },
  { path: 'forgot-password', loadComponent: () => import('./features/forgot-password-page/forgot-password-page.component').then(mod => mod.ForgotPasswordPageComponent), canActivate: [signedOutGuard] },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
