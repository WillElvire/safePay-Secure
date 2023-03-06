import { Component, Input, Output, ViewEncapsulation, EventEmitter, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { User } from 'src/app/core/interface/Api';
import { user } from 'src/app/core/interface/State';

@Component({
  selector: 's-navbar-account-widget',
  template: `
   <div class="d-flex buttons" *ngIf="!connectedUser?.id;else profil">
        <button nz-button routerLink="/auth/register">Inscription</button>
        <button nz-button style="margin-left: 5%;" routerLink="/auth/login">
          <span>Connexion</span>
        </button>
      </div>
      <ng-template #profil class="d-flex">
        <nz-avatar
          nzText = "{{connectedUser!.firstname[0]| uppercase }}{{ connectedUser!.lastname[0]| uppercase }}"
          style = "color:white; background-color:black;cursor: pointer;" nzSize="large" nz-dropdown
          [nzDropdownMenu] = "menu1">
        </nz-avatar>
        <nz-dropdown-menu #menu1="nzDropdownMenu" style="width:100% !important;">
          <s-navbar-widget></s-navbar-widget>
        </nz-dropdown-menu>
    </ng-template>
  `,
   encapsulation : ViewEncapsulation.Emulated,
   changeDetection : ChangeDetectionStrategy.OnPush,
  styles: [
  ]
})
export class SNavbarAccountWidgetComponent implements OnInit , OnChanges  {

   @Input() connectedUser !:User ;
   @Output() connectedUserChange = new EventEmitter<User>();

   constructor(private ChangeDetectorRef : ChangeDetectorRef) {

   }
   ngOnInit(): void {
      //this.ChangeDetectorRef.markForCheck();
   }

   ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.ChangeDetectorRef.detectChanges();
    //this.ChangeDetectorRef.detach();
   }
}
