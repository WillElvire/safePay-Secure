import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-profil-tools',
  standalone: true,
  imports: [CommonModule , NzDropDownModule,NzIconModule],
  templateUrl: './profil-tools.component.html',
  styleUrls: ['./profil-tools.component.scss']
})
export class ProfilToolsComponent implements AfterViewInit {

  ngAfterViewInit() {
    console.log();
  }
}
