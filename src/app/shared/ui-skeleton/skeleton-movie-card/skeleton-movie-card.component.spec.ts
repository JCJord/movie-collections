import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonMovieCardComponent } from './skeleton-movie-card.component';

describe('SkeletonMovieCardComponent', () => {
  let component: SkeletonMovieCardComponent;
  let fixture: ComponentFixture<SkeletonMovieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonMovieCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonMovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
