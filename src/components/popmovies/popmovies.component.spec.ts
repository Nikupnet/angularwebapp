import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopmoviesComponent } from './popmovies.component';

describe('PopmoviesComponent', () => {
  let component: PopmoviesComponent;
  let fixture: ComponentFixture<PopmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopmoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
