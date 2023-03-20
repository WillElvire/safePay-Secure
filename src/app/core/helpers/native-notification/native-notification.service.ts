import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn : 'root'
})
export class NativeNotificationService implements OnDestroy {

  permission !: NotificationPermission;
  notification !: Notification;

  constructor() {
   this.getPermission();
  }
  async getPermission() {
   this.permission  = await Notification.requestPermission();
  }

  pushNotification(notification : Notification) {
    this.notification = new Notification('Nouvelle notification de transaction',{
      body: 'Une nouvelle opporunité se presente a vous saisissez la maintenant ',
      vibrate : [10,30,100],
      image : '/assets/imgs/logo.png',
      icon: ' /assets/imgs/images/black.png',
      tag : 'transaction'

    });
    this.notification.addEventListener("click",function(){
      this.close();
    })
  }

  ngOnDestroy(): void {
      this.notification.close();
  }

}
