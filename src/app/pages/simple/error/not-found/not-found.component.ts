import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NZoroModule } from 'src/app/modules/nzoro.module';

@Component({
  selector: 'app-not-found',
  standalone : true,
  imports : [NZoroModule],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  constructor(private location :Location){

  }
  goBack(){
    this.location.back();
  }
}
