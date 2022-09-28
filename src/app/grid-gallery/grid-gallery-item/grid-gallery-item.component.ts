import { Component, ElementRef, Input } from '@angular/core';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';


@Component({
  selector: 'app-grid-gallery-item',
  templateUrl: './grid-gallery-item.component.html',
  styleUrls: ['./grid-gallery-item.component.scss'],
})
export class GridGalleryItemComponent {
  @Input() rowHeight: number = 1;
  @Input() gutterSize: number = 1;
  @Input() matGridTile!: MatGridTile;
  @Input() matGridList!: MatGridList;

  constructor(private ref: ElementRef) {}

  ngAfterViewInit() {
    const resizeObserver = new ResizeObserver((entries) => {
      if (this.matGridList.gutterSize !== `${this.rowHeight}px`) {
        this.matGridList.gutterSize = `${this.rowHeight}px`;
      }
      if (this.matGridList.rowHeight !== this.rowHeight) {
        this.matGridList.rowHeight = this.rowHeight;
      }

      if (
        this.matGridTile &&
        this.ref.nativeElement &&
        this.rowHeight + this.gutterSize
      ) {
        this.matGridTile.rowspan = Math.floor(
          this.ref.nativeElement.offsetHeight /
            (this.rowHeight + this.gutterSize)
        );
        this.matGridList.ngAfterContentChecked();
      }
    });

    resizeObserver.observe(this.ref.nativeElement);
  }
}
