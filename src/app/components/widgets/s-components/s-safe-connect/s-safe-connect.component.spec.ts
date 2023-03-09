import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSafeConnectComponent } from './s-safe-connect.component';

describe('SSafeConnectComponent', () => {
  let component: SSafeConnectComponent;
  let fixture: ComponentFixture<SSafeConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SSafeConnectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SSafeConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
