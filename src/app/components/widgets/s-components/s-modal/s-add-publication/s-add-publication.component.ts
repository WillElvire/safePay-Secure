import { AppFacades } from 'src/app/core/services/facades/app.facades';
import { Component } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 's-add-publication',
  templateUrl: './s-add-publication.component.html',
  styleUrls: ['./s-add-publication.component.scss']
})
export class SAddPublicationComponent {

  defaultPublicationForm  = "sell";

  constructor(private modal: NzModalRef,private appFacades :  AppFacades) {}

  destroyModal(): void {
    this.modal.destroy();
  }

  enableForm(formName : string) {
    this.defaultPublicationForm = formName;
  }

}
