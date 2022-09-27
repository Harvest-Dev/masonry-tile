import './polyfills';

import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatGridListModule,
  MatIconModule,
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app/app.component';
import {GridGalleryComponent} from './app/grid-gallery/grid-gallery.component';
import {GridGalleryItemComponent} from './app/grid-gallery/grid-gallery-item/grid-gallery-item.component';

@NgModule({
  exports: [
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    FlexLayoutModule
  ]
})
export class MaterialModule {}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  entryComponents: [AppComponent],
  declarations: [AppComponent, GridGalleryComponent, GridGalleryItemComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
