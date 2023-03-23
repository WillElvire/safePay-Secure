import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPdfGeneratorComponent } from './s-pdf-generator.component';

describe('SPdfGeneratorComponent', () => {
  let component: SPdfGeneratorComponent;
  let fixture: ComponentFixture<SPdfGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SPdfGeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SPdfGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
