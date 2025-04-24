import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'small-card',
  imports: [CommonModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.scss'
})
export class SmallCardComponent {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() filter: string = '';
}
