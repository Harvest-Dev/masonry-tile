import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { Image } from '../image.model';


@Component({
  selector: 'app-grid-gallery',
  templateUrl: './grid-gallery.component.html',
  styleUrls: ['./grid-gallery.component.scss'],
})
export class GridGalleryComponent implements OnInit, OnDestroy {
  @Input() images: Image[] = [];
  @Input() cols: number = 4;
  @Input() cols_xs: number = 1;
  @Input() cols_sm: number = 2;
  @Input() cols_md: number = 3;
  @Input() cols_lg: number = 4;
  @Input() cols_xl: number = 6;
  @Input() rowHeight: number = 1;
  @Input() gutterSize: number = 1;

  mediaWatcher!: Subscription;

  constructor() {}

  ngOnInit() {
    // this.mediaWatcher = this.media.asObservable().subscribe((change) => {
    //   this.cols = (this as any)[`cols_${change[0].mqAlias}`];
    // });
  }

  ngOnDestroy(): void {
    this.mediaWatcher.unsubscribe();
  }
}
