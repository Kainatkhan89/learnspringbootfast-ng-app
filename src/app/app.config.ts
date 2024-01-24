import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {LearningPathData} from "./core/services/learning-path/learning-path.data";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {provideAnimations} from "@angular/platform-browser/animations";


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    importProvidersFrom(InMemoryWebApiModule.forRoot(LearningPathData, { delay: 1000 })),
    importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"learnspringbootfast","appId":"1:369723666075:web:3e82892c2077fbfa2f203e","storageBucket":"learnspringbootfast.appspot.com","apiKey":"AIzaSyBRFSwhMaj1tqi9W7zv5z8_uroqkSdp95A","authDomain":"learnspringbootfast.firebaseapp.com","messagingSenderId":"369723666075"}))),
    importProvidersFrom(provideAuth(() => getAuth())),]
};
