import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieDialogComponent } from './components/movie-dialog/movie-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieApiService } from 'src/app/core/services/movie-api.service';
import { forkJoin, Subscription } from 'rxjs';
import { FoundMovieResponse } from 'src/app/models/movie.model';
import { MovieDetails } from 'src/app/models/movieDetails.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  private subscriptions = new Subscription();
  constructor(
    public dialog: MatDialog, 
    private router: Router, 
    private route: ActivatedRoute,
    private movieService: MovieApiService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const movieId = params['id'];
      if (movieId) {
        this.openDialog(movieId);
      } else {
        console.error('Movie ID is not provided in the route parameters.');
      }
    });
  }

  openDialog(movieId: string): void {
    const dialogRef = this.dialog.open(MovieDialogComponent, {
      width: '1200px',
      data: {
        movieId: movieId,
      }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/']);
    });
  }
}
