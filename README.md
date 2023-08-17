[![npm version](https://badge.fury.io/js/masonry-tile.svg)](https://badge.fury.io/js/masonry-tile) [![Downloads](https://img.shields.io/npm/dm/masonry-tile.svg)](https://www.npmjs.com/package/masonry-tile) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/Harvest-Dev/masonry-tile/master/LICENSE.md)

# Masonry Tile

Allows you to have masonry style tiles with **Material Grid List**.

## Installation

```
npm i masonry-tile --save
```

## Requirements

-   peerDependencies:

    -   `angular` 16.2.0 and more
    -   `angular/material` 16.2.0 and more

Use 1.0.0 for:

-   `angular` >=13.0.0
-   `angular/material` >=13.0.0

## Demo

[See a demo](https://harvest-dev.github.io/masonry-tile/dist/masonry-tile-demo/).

## Usage

### example

Example with a list of images and description.

```html
<mat-grid-list #matGridList [cols]="4">
    <mat-grid-tile *ngFor="let imageItem of images" #matGridTile>
        <masonry-tile [rowHeight]="1" [gutterSize]="1" [matGridTile]="matGridTile" [matGridList]="matGridList">
            <!-- content start -->
            <img [src]="imageItem?.src" [alt]="imageItem?.alt" />
            <div>{{ imageItem?.alt }}</div>
            <!-- content end -->
        </masonry-tile>
    </mat-grid-tile>
</mat-grid-list>
```

-   `matGridTile` (Required) : reference to matGridTile
-   `matGridList` (Required) : reference to matGridList

Include in your module:

```ts
import { MatGridListModule } from '@angular/material/grid-list';
import { MasonryTileModule } from 'masonry-tile';

@NgModule({
    imports: [
        MatGridListModule, // required
        MasonryTileModule,
    ],
})
export class MyModule {}
```

## Publishing the library

```
npm run build:lib
npm run publish:lib
```

## Update Demo

```
npm run build:demo
```

## License

Like Angular, this module is released under the permissive MIT license. Your contributions are always welcome.
