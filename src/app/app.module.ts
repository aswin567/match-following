import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRouting } from './app.routing.module';

import { DndModule } from 'ng2-dnd';

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
    SharedModule,
    DndModule.forRoot(),
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
