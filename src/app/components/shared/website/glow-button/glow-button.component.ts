import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-glow-button',
  templateUrl: './glow-button.component.html',
  styleUrls: ['./glow-button.component.scss']
})
export class GlowButtonComponent {
   @Input() url !: string;
}
