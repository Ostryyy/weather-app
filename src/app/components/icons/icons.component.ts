import { Component, Input } from '@angular/core';

type iconType =
  | 'sunset'
  | 'sunrise'
  | 'humidity'
  | 'wind'
  | 'Moderate rain'
  | 'Heavy rain'
  | 'Patchy rain possible'
  | 'Overcast';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
export class IconsComponent {
  @Input() icon?: iconType;
  @Input() iconSmall?: boolean = true;
}
