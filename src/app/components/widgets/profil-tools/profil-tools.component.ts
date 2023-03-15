import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';
import { AppStateFacade } from 'src/app/core/services/facades/appState.facades';

@Component({
  selector: 'app-profil-tools',
  standalone: true,
  imports: [CommonModule , NzDropDownModule,NzIconModule,RouterModule],
  templateUrl: './profil-tools.component.html',
  styleUrls: ['./profil-tools.component.scss']
})
export class ProfilToolsComponent implements AfterViewInit {

  constructor(private appStateFacade : AppStateFacade) {

  }
  ngAfterViewInit() {
    console.log();
  }

  logout() {
    return this.appStateFacade.logout$();
  }
}
