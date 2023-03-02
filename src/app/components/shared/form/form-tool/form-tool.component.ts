import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-tool',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
   <ng-container>
    <div class="text-center mt-4">
      <span>- Ou -</span>
      <p>
        <a routerLink="{{link}}">{{text}}</a>
      </p>
    </div>
  </ng-container>

  `,
  styles: [
  ]
})
export class FormToolComponent {
 @Input() text !: string ;
 @Input() link !: string;
}
