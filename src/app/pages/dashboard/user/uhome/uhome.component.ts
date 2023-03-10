import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TUI_DEFAULT_STRINGIFY} from '@taiga-ui/cdk';
import {TuiPoint} from '@taiga-ui/core';
@Component({
  selector: 'app-uhome',
  templateUrl: './uhome.component.html',
  styleUrls: ['./uhome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UhomeComponent {
  readonly value: readonly TuiPoint[] = [
    [50, 50],
    [100, 75],
    [150, 50],
    [200, 150],
    [250, 155],
    [300, 190],
    [350, 90],
];

readonly stringify = TUI_DEFAULT_STRINGIFY;
}
