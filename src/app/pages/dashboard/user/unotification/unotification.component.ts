import { Subscription, take } from 'rxjs';
import { MarketPlacePublicationDetail, User } from './../../../../core/interface/Api';
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
  user !: User;
  subscription = new Subscription();

  ngOnInit(): void {
    this.getNotification();
    this.getUser();
    this.nativeNotification.pushNotification(new Notification(""));
  }

  getNotification() {
    this.AppStateFacade.AppFacades.getNotification().subscribe((response) => {
      console.log(response);
      this.notificationList = response.returnObject as MarketPlacePublicationDetail[]
    });
  }

  getUser() {
    this.AppStateFacade.StatesFacades
    .selectUser()
    .pipe(take(1))
    .subscribe((user) => (this.user = user));

  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
