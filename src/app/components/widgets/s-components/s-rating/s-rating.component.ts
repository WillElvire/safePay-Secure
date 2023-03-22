import { AppFacades } from './../../../../core/services/facades/app.facades';
import { Component, EventEmitter, Output, inject } from '@angular/core';

@Component({
  selector: 's-s-rating',
  templateUrl: './s-rating.component.html',
  styleUrls: ['./s-rating.component.scss'],
})
export class SRatingComponent {
  tooltips = ['terrible', 'mediocre', 'normal', 'bien', 'parfait'];
  value = 0;
  isVisible = true;

  @Output() closable = new EventEmitter<boolean>();
  private readonly appFacades = inject(AppFacades);

  constructor() {}

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  getToolTipIndex() {
    return (this.value as number) - 1;
  }

  soumettre() {
    if (this.value != 0) {
      this.closable.emit(true);
      this.appFacades.nBuildSuccess(
        'Merci pour votre temps',
        'Enregistrement avis utilisateur'
      );
    } else {
      this.appFacades.mBuildError('Aidez vous à sublimer votre vie');
    }
  }
}
