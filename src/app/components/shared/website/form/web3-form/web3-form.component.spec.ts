import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Web3FormComponent } from './web3-form.component';

describe('Web3FormComponent', () => {
  let component: Web3FormComponent;
  let fixture: ComponentFixture<Web3FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Web3FormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Web3FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
