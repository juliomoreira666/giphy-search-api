import { GiphySearchService } from './../giphy-search.service';
import { GiphySearchManualComponent } from './giphy-search-manual.component';
import { NgModule } from '@angular/core';



@NgModule({
    imports: [],
    exports: [GiphySearchManualComponent],
    declarations: [GiphySearchManualComponent],
    providers: [GiphySearchService],
})
export class GiphySeacrhManualComponentModule { }
