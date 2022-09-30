import { Component, HostListener, Input, OnInit } from '@angular/core';

import { Image } from '../image.model';


@Component({
  selector: 'app-grid-gallery',
  templateUrl: './grid-gallery.component.html',
  styleUrls: ['./grid-gallery.component.scss'],
})
export class GridGalleryComponent implements OnInit {
  @Input() images: Image[] = [];
  @Input() cols: number = 4;
  @Input() cols_xs: number = 1;
  @Input() cols_sm: number = 2;
  @Input() cols_md: number = 3;
  @Input() cols_lg: number = 4;
  @Input() cols_xl: number = 6;
  @Input() rowHeight: number = 1;
  @Input() gutterSize: number = 1;

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
