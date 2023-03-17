import { ActivatedRoute, RouterModule } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';
import { NZoroModule } from 'src/app/modules/nzoro.module';
import { CommonModule, Location } from '@angular/common';
import { ComponentModule } from 'src/app/modules/components.module';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
  standalone : true,
  imports : [CommonModule,RouterModule,NZoroModule,ComponentModule],
})
export class SuccessComponent  implements OnInit{

  private readonly activatedRoute  = inject(ActivatedRoute);
  private readonly location  = inject(Location);

  transactionId : string  = "";
  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.transactionId = params.get("transactionId") as string;
      if(!this.transactionId) this.location.back();
    });
  }


}
