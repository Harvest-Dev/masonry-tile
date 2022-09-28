import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MasonryTileModule } from '../../projects/masonry-tile/src/lib/masonry-tile.module';

import { AppComponent } from './app.component';
import { GridGalleryComponent } from './grid-gallery/grid-gallery.component';


@NgModule({
  exports: [MatButtonModule, MatGridListModule, MatIconModule],
})
export class MaterialModule {}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MasonryTileModule,
  ],
  declarations: [AppComponent, GridGalleryComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
