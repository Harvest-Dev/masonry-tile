import { Component, HostListener, Input, OnInit, numberAttribute } from '@angular/core';

import { Image } from '../image.model';

@Component({
    selector: 'app-grid-gallery',
    templateUrl: './grid-gallery.component.html',
    styleUrls: ['./grid-gallery.component.scss'],
})
export class GridGalleryComponent implements OnInit {
    @Input() images: Image[] = [];
    @Input({ transform: numberAttribute }) cols: number = 4;
    @Input({ transform: numberAttribute }) cols_xs: number = 1;
    @Input({ transform: numberAttribute }) cols_sm: number = 2;
    @Input({ transform: numberAttribute }) cols_md: number = 3;
    @Input({ transform: numberAttribute }) cols_lg: number = 4;
    @Input({ transform: numberAttribute }) cols_xl: number = 6;
    @Input({ transform: numberAttribute }) rowHeight: number = 1;
    @Input({ transform: numberAttribute }) gutterSize: number = 1;

    ngOnInit() {
        this.onResize();
    }

    @HostListener('window:resize')
    onResize() {
        if (window.innerWidth < 600) {
            this.cols = this.cols_xs;
        } else if (window.innerWidth < 900) {
            this.cols = this.cols_sm;
        } else if (window.innerWidth < 1200) {
            this.cols = this.cols_md;
        } else if (window.innerWidth < 1536) {
            this.cols = this.cols_lg;
        } else {
            this.cols = this.cols_xl;
        }
    }
}
