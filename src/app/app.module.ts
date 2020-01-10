import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { PolicyListComponent } from './policy-list/policy-list.component';

@NgModule({
  declarations: [AppComponent, PolicyListComponent],
  imports: [BrowserModule, AppRoutingModule, AngularFireModule.initializeApp(environment.firebaseConfig), AngularFireDatabaseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
