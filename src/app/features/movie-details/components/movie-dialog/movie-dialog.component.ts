import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MovieApiService } from 'src/app/core/services/movie-api.service';
import { FoundMovieResponse, Show } from 'src/app/models/movie.model';
import { MovieDetails } from 'src/app/models/movieDetails.model';

@Component({
  selector: 'app-movie-dialog',
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.scss']
})
export class MovieDialogComponent implements OnInit {
  imgPath: string = 'https://image.tmdb.org/t/p/w500';
  show!: MovieDetails;
  guestSessionId: any;
  isSendingVote: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<MovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {data: MovieDetails, guestSessionId: string},
    private movieService: MovieApiService,
    private _snackBar: MatSnackBar 
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.show = this.data.data as MovieDetails;
    this.guestSessionId = this.data.guestSessionId;
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

  openSnackBar(message: string) {
    let config: MatSnackBarConfig = {
      duration: 8000,
    };
    this._snackBar.open(message, '', config);
  }
}
