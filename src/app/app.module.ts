import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { GridAreaComponent } from './grid-area/grid-area.component';
import { GridInputComponent } from './grid-input/grid-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TextAreaComponent,
    GridAreaComponent,
    GridInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
