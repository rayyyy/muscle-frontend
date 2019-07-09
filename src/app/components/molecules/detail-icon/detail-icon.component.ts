import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-icon',
  templateUrl: './detail-icon.component.html',
  styleUrls: ['./detail-icon.component.sass']
})
export class DetailIconComponent {
  @Input() iconName: string;
  @Input() iconDetail: string;

  constructor() { }
}
