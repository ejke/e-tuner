import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LetterComponent } from './letter/letter.component';
import { BlockComponent } from './block/block.component';
import { ArrowLowComponent } from './arrows/arrow-low.component';
import { ArrowHighComponent } from './arrows/arrow-high.component';

@NgModule({
  declarations: [
    AppComponent,
    LetterComponent,
    BlockComponent,
    ArrowLowComponent,
    ArrowHighComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
