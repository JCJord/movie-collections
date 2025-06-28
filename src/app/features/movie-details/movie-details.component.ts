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
      const movieId = params['id']; // Get the movie ID from the route parameters
      if (movieId) {
        console.log(movieId)
        this.loadMovieDetails(movieId);
      } else {
        console.error('Movie ID is not provided in the route parameters.');
      }
    });
  }

  openDialog(data: MovieDetails, guestSessionId: string): void {
    const dialogRef = this.dialog.open(MovieDialogComponent, {
      width: '1200px',
      data: {
        data: data,
        guestSessionId: guestSessionId
      }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/']);
    });
  }

  loadMovieDetails(movieId: number): void {
    const existingGuestSession = this.movieService.getGuest();

    if (existingGuestSession) {
      this.subscriptions.add(
        this.movieService.findMovieById(movieId).subscribe({
          next: (movieDetails) => {
            this.openDialog(movieDetails, existingGuestSession);
          },
          error: (error) => {
            console.error('Error fetching movie details:', error);
          }
        })
      );
    } else {
      this.subscriptions.add(
        forkJoin({
          guestSession: this.movieService.createGuest(),
          movieDetails: this.movieService.findMovieById(movieId)
        }).subscribe({
          next: ({ guestSession, movieDetails }) => {
            localStorage.setItem('tmdb_guest_session', guestSession.guest_session_id);
            this.openDialog(movieDetails, guestSession.guest_session_id);
          },
          error: (error) => {
            console.error('Error creating guest session or fetching movie details:', error);
          }
        })
      );
    }
  }
}
