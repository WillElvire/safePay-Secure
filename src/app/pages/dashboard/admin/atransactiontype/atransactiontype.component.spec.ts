import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtransactiontypeComponent } from './atransactiontype.component';

describe('AtransactiontypeComponent', () => {
  let component: AtransactiontypeComponent;
  let fixture: ComponentFixture<AtransactiontypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtransactiontypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtransactiontypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
