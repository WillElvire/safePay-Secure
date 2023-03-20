import { Subscription } from 'rxjs';
import { MarketPlacePublicationDetail } from './../../../../core/interface/Api';
import { AppStateFacade } from './../../../../core/services/facades/appState.facades';
import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { NativeNotificationService } from 'src/app/core/helpers/native-notification/native-notification.service';

@Component({
  selector: 'u-unotification',
  templateUrl: './unotification.component.html',
  styleUrls: ['./unotification.component.scss'],
})
export class UnotificationComponent implements OnInit , OnDestroy {
  private AppStateFacade = inject(AppStateFacade);
  public notificationList !: MarketPlacePublicationDetail[];
  private nativeNotification  = inject(NativeNotificationService);
  subscription = new Subscription();

  ngOnInit(): void {
    this.AppStateFacade.AppFacades.getNotification().subscribe((response) => {
      console.log(response);
      this.notificationList = response.returnObject as MarketPlacePublicationDetail[]
    });

    this.nativeNotification.pushNotification(new Notification(""))
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
