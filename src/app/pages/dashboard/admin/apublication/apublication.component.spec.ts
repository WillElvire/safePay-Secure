import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApublicationComponent } from './apublication.component';

describe('ApublicationComponent', () => {
  let component: ApublicationComponent;
  let fixture: ComponentFixture<ApublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApublicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
