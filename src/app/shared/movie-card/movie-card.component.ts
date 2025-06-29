import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieApiService } from 'src/app/core/services/movie-api.service';
import { CollectionSelectDialogComponent } from 'src/app/features/collections/components/collection-select-dialog/collection-select-dialog.component';
import { MovieDialogComponent } from 'src/app/features/movie-details/components/movie-dialog/movie-dialog.component';
import { Show } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() show!: Show;
  @Input() showCollectionButton: boolean = true;
  @Input() navigateToRoute: boolean = true;
  imgPath: string = 'https://image.tmdb.org/t/p/w500';

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  goToDetails(): void {
    if(this.navigateToRoute) {
      this.router.navigate(['/movie', this.show.id]);
    }else {
      this.openMovieDetailsDialog()
    }
  }

  openCollectionSelectDialog(): void {
    const dialogRef = this.dialog.open(CollectionSelectDialogComponent, {
      width: '1200px',
      data: {
        show: this.show
      }
    });
    
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openMovieDetailsDialog(): void {
    console.log(this.show.poster_path)
    const dialogRef = this.dialog.open(MovieDialogComponent, {
      width: '1200px',
      data: {
        movieId: this.show.id,
      }
    });
    
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  
}
