import { NzModalService } from 'ng-zorro-antd/modal';
import { ModalService } from './../../../../../core/helpers/modal/modal.service';
import { Component } from '@angular/core';
import { SAddPublicationComponent } from 'src/app/components/widgets/s-components/s-modal/s-add-publication/s-add-publication.component';

@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.component.html',
  styleUrls: ['./add-publication.component.scss']
})
export class UAddPublicationComponent {
  isVisible = false;
  isConfirmLoading = false;

  constructor(private modalService: NzModalService) {}


  showModal(): void {
    this.modalService.create({
      nzWidth : 800,
      nzContent: SAddPublicationComponent,
      nzFooter : null
    });
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
