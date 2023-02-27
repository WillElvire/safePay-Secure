import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilToolsComponent } from './profil-tools.component';

describe('ProfilToolsComponent', () => {
  let component: ProfilToolsComponent;
  let fixture: ComponentFixture<ProfilToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ProfilToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
