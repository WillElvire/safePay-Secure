import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtransactionComponent } from './atransaction.component';

describe('AtransactionComponent', () => {
  let component: AtransactionComponent;
  let fixture: ComponentFixture<AtransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
