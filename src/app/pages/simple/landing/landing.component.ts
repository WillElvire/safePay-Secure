import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from 'src/app/modules/components.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule,ComponentModule,NzButtonModule,NzIconModule,RouterModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {


  @HostListener('scroll') getScroll(event : any) {
    console.log(event)
  }
}
