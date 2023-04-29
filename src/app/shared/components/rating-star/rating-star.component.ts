import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.scss']
})
export class RatingStarComponent implements OnChanges {
  
  @Input() rating!: number;
  starWidth!:number;
  constructor() { }

  ngOnChanges(): void {
    
  this.starWidth = this.rating * 56 / 5;

  }

}
