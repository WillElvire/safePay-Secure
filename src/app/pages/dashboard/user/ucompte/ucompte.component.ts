import { Component } from '@angular/core';
import { tuiSum } from '@taiga-ui/cdk';

@Component({
  selector: 'u-ucompte',
  templateUrl: './ucompte.component.html',
  styleUrls: ['./ucompte.component.scss']
})
export class UcompteComponent {
  activeItemIndex = NaN;

  readonly value = [13769, 12367, 10172, 3018, 2592];
  readonly sum = tuiSum(...this.value);
  readonly labels = ['Food', 'Cafe', 'Open Source', 'Taxi', 'Other'];

  isItemActive(index: number): boolean {
      return this.activeItemIndex === index;
  }

  onHover(index: number, hovered: boolean): void {
      this.activeItemIndex = hovered ? index : 0;
  }

  getColor(index: number): string {
      return `var(--tui-chart-${index})`;
  }
}
