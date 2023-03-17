import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtransactionComponent } from './utransaction.component';

describe('UtransactionComponent', () => {
  let component: UtransactionComponent;
  let fixture: ComponentFixture<UtransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
