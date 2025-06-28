import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  @Input() movieId!: number;
  @Input() initialRating: number = 0;
  @Output() ratingSubmitted = new EventEmitter<number>();

  rating = 0;
  stars = Array(10).fill(0);

  constructor() { }
  
  ngOnInit(): void {
    this.rating = this.initialRating;
  }
  
  setRating(value: number) {
    this.rating = value;
  }

  submitRating() {
    console.log(`Submitting rating ${this.rating} for movie ${this.movieId}`);
    this.ratingSubmitted.emit(this.rating);
  }
}
