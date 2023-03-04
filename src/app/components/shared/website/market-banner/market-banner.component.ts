import { Component, Input } from '@angular/core';
import { string } from 'prop-types';

@Component({
  selector: 'app-market-banner',
  templateUrl: './market-banner.component.html',
  styleUrls: ['./market-banner.component.scss']
})
export class MarketBannerComponent {
  @Input() titre !: string ;
  @Input() keyWord !: string;
  @Input() middleWord !:string;
}
