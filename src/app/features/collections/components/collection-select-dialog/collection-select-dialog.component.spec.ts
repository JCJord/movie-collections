import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionSelectDialogComponent } from './collection-select-dialog.component';

describe('CollectionSelectDialogComponent', () => {
  let component: CollectionSelectDialogComponent;
  let fixture: ComponentFixture<CollectionSelectDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionSelectDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionSelectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
