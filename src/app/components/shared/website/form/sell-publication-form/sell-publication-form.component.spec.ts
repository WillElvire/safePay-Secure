import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellPublicationFormComponent } from './sell-publication-form.component';

describe('SellPublicationFormComponent', () => {
  let component: SellPublicationFormComponent;
  let fixture: ComponentFixture<SellPublicationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellPublicationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellPublicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
