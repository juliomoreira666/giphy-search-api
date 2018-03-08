import { Response } from '@angular/http';
import { GiphySearchService } from './../giphy-search.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'giphy-search-manual',
    templateUrl: 'giphy-search-manual.component.html'
})

export class GiphySearchManualComponent implements OnInit {
    constructor(private giphySearchService: GiphySearchService) { }

    ngOnInit() { }

    pesquisarGiphy() {
        this.giphySearchService.pesquisarGiphy('2', 'good')
            .subscribe((response: Response) => {
                console.log(response);
            });
    }
}

