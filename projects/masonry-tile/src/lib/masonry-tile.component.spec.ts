import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonryTileComponent } from './masonry-tile.component';

describe('MasonryTileComponent', () => {
  let component: MasonryTileComponent;
  let fixture: ComponentFixture<MasonryTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasonryTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasonryTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
