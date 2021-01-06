import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestmoviesComponent } from './bestmovies.component';

describe('BestmoviesComponent', () => {
  let component: BestmoviesComponent;
  let fixture: ComponentFixture<BestmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestmoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
