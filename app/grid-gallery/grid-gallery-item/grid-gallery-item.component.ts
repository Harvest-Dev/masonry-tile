import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
  Host,
} from '@angular/core';
import { Image } from '../../image.model';

@Component({
  selector: 'app-grid-gallery-item',
  templateUrl: './grid-gallery-item.component.html',
  styleUrls: ['./grid-gallery-item.component.scss'],
})
export class GridGalleryItemComponent {
  @Input() image: Image;
  @Input() rowHeight: number = 1;
  @Input() gutterSize: number = 1;
  @ViewChild('img') img: ElementRef;

  public rows: number = 0;

  constructor(private elementRef: ElementRef) {}

  @HostListener('window:resize')
  calculateRows() {
    this.rows = Math.floor(
      this.elementRef.nativeElement.offsetHeight /
        (this.rowHeight + this.gutterSize)
    );
  }
}
