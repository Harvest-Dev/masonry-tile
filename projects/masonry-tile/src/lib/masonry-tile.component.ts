import { Component, ElementRef, Input, numberAttribute } from '@angular/core';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';

@Component({
    selector: 'masonry-tile',
    template: '<ng-content></ng-content>',
})
export class MasonryTileComponent {
    @Input({ transform: numberAttribute }) rowHeight: number = 1;
    @Input({ transform: numberAttribute }) gutterSize: number = 1;
    @Input() matGridTile!: MatGridTile;
    @Input() matGridList!: MatGridList;

    constructor(private ref: ElementRef) {}

    ngAfterViewInit() {
        const resizeObserver = new ResizeObserver(entries => {
            if (this.matGridList.gutterSize !== `${this.rowHeight}px`) {
                this.matGridList.gutterSize = `${this.rowHeight}px`;
            }
            if (this.matGridList.rowHeight !== this.rowHeight) {
                this.matGridList.rowHeight = this.rowHeight;
            }

            if (this.matGridTile && this.ref.nativeElement && this.rowHeight + this.gutterSize) {
                this.matGridTile.rowspan = Math.floor(
                    this.ref.nativeElement.offsetHeight / (this.rowHeight + this.gutterSize),
                );
                this.matGridList.ngAfterContentChecked();
            }
        });

        resizeObserver.observe(this.ref.nativeElement);
    }
}
