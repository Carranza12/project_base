import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"test-firebase-ab67a","appId":"1:792827252767:web:984e4cf63774ae3f96852a","storageBucket":"test-firebase-ab67a.appspot.com","apiKey":"AIzaSyD7BX6XLN-TDrSzk8uk3EavRKokMtFkSQw","authDomain":"test-firebase-ab67a.firebaseapp.com","messagingSenderId":"792827252767"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
