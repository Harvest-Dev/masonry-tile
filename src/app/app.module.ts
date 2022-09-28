import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MasonryTileComponent } from './grid-gallery/grid-gallery-item/masonry-tile.component';
import { GridGalleryComponent } from './grid-gallery/grid-gallery.component';


@NgModule({
  exports: [MatButtonModule, MatGridListModule, MatIconModule],
})
export class MaterialModule {}

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  declarations: [AppComponent, GridGalleryComponent, MasonryTileComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
