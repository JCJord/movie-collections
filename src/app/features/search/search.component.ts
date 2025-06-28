import { Component, ViewChild } from '@angular/core';
import { MovieApiService } from 'src/app/core/services/movie-api.service';
import { SearchResponse, Show } from 'src/app/models/movie.model';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  shows: Show[] = [];
  imgPath: string = 'https://image.tmdb.org/t/p/w500';

  totalResults: number = 0;
  pageSize: number = 20;
  currentPage: number = 1;
  isLoading: boolean = false;
  currentQuery: string = '';

  constructor(private movieService: MovieApiService) {}

  loadShows(query: string, page: number = 1): void {
    this.isLoading = true;
    this.currentQuery = query;

    this.movieService.searchMovies(query, page)
      .subscribe({
        next: (response: SearchResponse) => {
          this.shows = response.results;
          this.totalResults = response.total_results;
          this.isLoading = false;
          console.log('Search results:', this.shows);
          console.log('Total results:', this.totalResults);
        },
        error: (error) => {
          console.error('Error searching movies:', error);
          this.isLoading = false;
          this.shows = [];
          this.totalResults = 0;
        }
    });
  }

  onPageChange(event: PageEvent): void {
    const pageIndex = event.pageIndex + 1; // Mat-paginator is 0-based, TMDB is 1-based
    this.loadShows(this.currentQuery, pageIndex);
  }

  onSearch(query: string): void {
    // Reset paginator to first page when new search is performed
    if (this.paginator) {
      this.paginator.firstPage();
    }
    this.loadShows(query, 1);
  }

  getSkeletonArray(count: number): number[] {
    return Array(count).fill(0);
  }
}
