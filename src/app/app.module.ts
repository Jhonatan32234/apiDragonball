import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routes';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CharactersModule } from './characters/characters.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CharactersModule
    
],
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule { }
