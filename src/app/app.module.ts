import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MasonryTileModule } from '../../projects/masonry-tile/src/lib/masonry-tile.module';

import { AppComponent } from './app.component';
import { GridGalleryComponent } from './grid-gallery/grid-gallery.component';


@NgModule({
  exports: [
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class MaterialModule {}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MasonryTileModule,
    FormsModule,
  ],
  declarations: [AppComponent, GridGalleryComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
