import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AroleComponent } from './arole.component';

describe('AroleComponent', () => {
  let component: AroleComponent;
  let fixture: ComponentFixture<AroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AroleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
