import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasemoviesComponent } from './releasemovies.component';

describe('ReleasemoviesComponent', () => {
  let component: ReleasemoviesComponent;
  let fixture: ComponentFixture<ReleasemoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleasemoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleasemoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
