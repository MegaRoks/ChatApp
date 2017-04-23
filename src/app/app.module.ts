import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyDmy5JXaDolqRFpHatqsfgXOhw_34Irk5w",
    authDomain: "mychatapp-fc11d.firebaseapp.com",
    databaseURL: "https://mychatapp-fc11d.firebaseio.com",
    projectId: "mychatapp-fc11d",
    storageBucket: "mychatapp-fc11d.appspot.com",
    messagingSenderId: "114595676557"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
