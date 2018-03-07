import { GiphySeacrhManualComponentModule } from './giphy/giphy-search-manual/giphy-search-manual.module';
import { GiphySearchManualComponent } from './giphy/giphy-search-manual/giphy-search-manual.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    GiphySeacrhManualComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
