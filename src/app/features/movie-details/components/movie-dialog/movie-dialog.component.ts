import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { forkJoin, Subscription } from 'rxjs';
import { MovieApiService } from 'src/app/core/services/movie-api.service';
import { FoundMovieResponse, Show } from 'src/app/models/movie.model';
import { MovieDetails } from 'src/app/models/movieDetails.model';

@Component({
  selector: 'app-movie-dialog',
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.scss']
})
export class MovieDialogComponent implements OnInit, OnDestroy {
  imgPath: string = 'https://image.tmdb.org/t/p/w500';
  show!: MovieDetails;
  guestSessionId: any;
  isSendingVote: boolean = false;
  isLoading: boolean = false;
  private subscriptions = new Subscription();

  constructor(
    public dialogRef: MatDialogRef<MovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {movieId: number},
    private movieService: MovieApiService,
    private _snackBar: MatSnackBar 
  ) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.loadMovieDetails(this.data.movieId);
    console.log(this.show)
  }

  saveRating(rating: number) {
    this.isSendingVote = true;
    this.movieService.rateShow(this.show.id, rating, this.guestSessionId).subscribe({
      next: (response) => {
        this.openSnackBar(response.status_message + ' Soon the tmdb will update your vote rating of ' + rating);
        this.isSendingVote = false;
      },
      error: (error) => {
        console.error('Error submitting rating:', error);
        this.isSendingVote = false;
      }
    });
  }

  loadMovieDetails(movieId: number): void {
    const existingGuestSession = this.movieService.getGuest();
    this.isLoading = true;
    if (existingGuestSession) {
      this.subscriptions.add(
        this.movieService.findMovieById(movieId).subscribe({
          next: (movieDetails) => {
            this.show = movieDetails;
            this.guestSessionId = existingGuestSession;
            this.isLoading = false;

          },
          error: (error) => {
            this.isLoading = false;
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
            this.show = movieDetails;
            this.guestSessionId = guestSession.guest_session_id;
            this.isLoading = false;

          },
          error: (error) => {
            this.isLoading = false;
            console.error('Error creating guest session or fetching movie details:', error);
          }
        })
      );
    }
  }

  openSnackBar(message: string) {
    let config: MatSnackBarConfig = {
      duration: 8000,
    };
    this._snackBar.open(message, '', config);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
