import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPublicationFormComponent } from './buy-publication-form.component';

describe('BuyPublicationFormComponent', () => {
  let component: BuyPublicationFormComponent;
  let fixture: ComponentFixture<BuyPublicationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyPublicationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyPublicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
