import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieApiService } from 'src/app/core/services/movie-api.service';
import { Show } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() show!: Show;
  imgPath: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDetails(): void {
    this.router.navigate(['/movie', this.show.id]);
  }
}
