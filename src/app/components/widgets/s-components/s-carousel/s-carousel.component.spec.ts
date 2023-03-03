import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCarouselComponent } from './s-carousel.component';

describe('SCarouselComponent', () => {
  let component: SCarouselComponent;
  let fixture: ComponentFixture<SCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
