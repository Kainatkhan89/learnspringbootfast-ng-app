import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"learndotnetfast","appId":"1:523066733452:web:5eab92ebb18500a1695ca9","storageBucket":"learndotnetfast.appspot.com","apiKey":"AIzaSyCPOxlp3Xt5eUuMDDgmE0cG3y4-ZpfPhmc","authDomain":"learndotnetfast.firebaseapp.com","messagingSenderId":"523066733452"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideStorage(() => getStorage()))]
};
