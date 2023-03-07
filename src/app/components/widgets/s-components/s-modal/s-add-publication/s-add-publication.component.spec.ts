import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SAddPublicationComponent } from './s-add-publication.component';

describe('SAddPublicationComponent', () => {
  let component: SAddPublicationComponent;
  let fixture: ComponentFixture<SAddPublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SAddPublicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SAddPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
