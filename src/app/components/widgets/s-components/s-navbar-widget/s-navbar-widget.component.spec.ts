import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SNavbarWidgetComponent } from './s-navbar-widget.component';

describe('SNavbarWidgetComponent', () => {
  let component: SNavbarWidgetComponent;
  let fixture: ComponentFixture<SNavbarWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SNavbarWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SNavbarWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
