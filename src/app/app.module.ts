import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { MatchFollowingComponent } from './match-following/match-following.component';


@NgModule({
  declarations: [
    AppComponent,
    MatchFollowingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
