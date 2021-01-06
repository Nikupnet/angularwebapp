import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviedetailComponent } from './moviedetail.component';

describe('MoviedetailComponent', () => {
  let component: MoviedetailComponent;
  let fixture: ComponentFixture<MoviedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviedetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviedetailComponent);
    component = fixture.componentInstance;
});

it('should be created', () => {
    fixture.detectChanges();
    expect(component)
        .toBeTruthy();
});
});
