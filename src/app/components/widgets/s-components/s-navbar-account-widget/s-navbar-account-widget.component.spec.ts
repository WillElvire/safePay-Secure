import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SNavbarAccountWidgetComponent } from './s-navbar-account-widget.component';

describe('SNavbarAccountWidgetComponent', () => {
  let component: SNavbarAccountWidgetComponent;
  let fixture: ComponentFixture<SNavbarAccountWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SNavbarAccountWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SNavbarAccountWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
