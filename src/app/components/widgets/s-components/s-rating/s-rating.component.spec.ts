import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SRatingComponent } from './s-rating.component';

describe('SRatingComponent', () => {
  let component: SRatingComponent;
  let fixture: ComponentFixture<SRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
