import { Component, Input } from '@angular/core';

@Component({
  selector: 'small-card',
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.scss'
})
export class SmallCardComponent {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() value: string = '';
}
