import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SRoleSelectComponent } from './s-role-select.component';

describe('SRoleSelectComponent', () => {
  let component: SRoleSelectComponent;
  let fixture: ComponentFixture<SRoleSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SRoleSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SRoleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
