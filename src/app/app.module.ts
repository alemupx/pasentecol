import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

const config = {
  apiKey: 'AIzaSyDdx4I-Im2GAwBOwtVdHG9DczFsv0UsV6M',
  authDomain: 'pasentecol.firebaseapp.com',
  projectId: 'pasentecol',
  storageBucket: 'pasentecol.appspot.com',
  messagingSenderId: '829744031520',
  appId: '1:829744031520:web:e133eab0a3f028c6505945',
  measurementId: 'G-BBL9YGZW2L',
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireStorageModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
