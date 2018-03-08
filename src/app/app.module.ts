import { GiphySearchService } from './giphy/giphy-search.service';
import { GiphySeacrhManualComponentModule } from './giphy/giphy-search-manual/giphy-search-manual.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { Http, HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    BrowserModule,
    Http,
    NgModule,
    GiphySeacrhManualComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
