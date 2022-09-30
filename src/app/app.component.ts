import { Component } from '@angular/core';

import { Image } from './image.model';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  numOfImages = 8;
  images: Image[];

  rowHeight = 1;
  gutterSize = 1;

  constructor() {
    this.images = this.generateImagesList();
  }

  private generateRandomImage(): Image {
    const width = 600;
    const height = (Math.random() * (1000 - 400) + 400).toFixed();
    return { src: `https://picsum.photos/${width}/${height}/?random` };
  }

  private generateImagesList(): Image[] {
    const images: Image[] = [];
    for (let i = 0; i < this.numOfImages; i++) {
      const image = this.generateRandomImage();
      image.alt = `#${i}`;
      images.push(image);
    }
    return images;
  }

  addImage() {
    const image = this.generateRandomImage();
    image.alt = `#${this.images.length}`;
    this.images.push(image);
  }
}
