import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Guest } from 'src/app/models/guest.model';
import { ExternalId, FoundMovieResponse, SearchMovieResponse } from 'src/app/models/movie.model';
import { MovieDetails } from 'src/app/models/movieDetails.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  constructor(private http: HttpClient) { }

  searchMovies(query: string, page: number = 2): Observable<SearchMovieResponse> {
    const params = new HttpParams()
      .set('query', query)
      .set('include_adult', 'false')
      .set('language', 'en-US')
      .set('page', page.toString())
      .set('api_key', environment.tmdbApiKey);
    return this.http.get<SearchMovieResponse>(environment.apiUrl + '/search/movie', { params });
  }

  findMovieById(id: any, externalSource: string = 'imdb_id'): Observable<MovieDetails> {
    const url = `${environment.apiUrl}/movie/${id}`;

    const params = new HttpParams()
      .set('api_key', environment.tmdbApiKey)
      .set('external_source', externalSource)
      .set('language', 'en-US')

    return this.http.get<MovieDetails>(url, { params });
  }

  rateShow(movieId: number, rating: number, guestSessionId: string): Observable<any> {
    const url = `${environment.apiUrl}/movie/${movieId}/rating`;
    
    const params = new HttpParams()
      .set('api_key', environment.tmdbApiKey)
      .set('guest_session_id', guestSessionId);

    const body = {
      value: rating
    };

    return this.http.post(url, body, {
      params,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    });
  }

  createGuest(): Observable<Guest> {
    const url = `${environment.apiUrl}/authentication/guest_session/new`;

    const params = new HttpParams()
      .set('api_key', environment.tmdbApiKey)
      .set('language', 'en-US')

    return this.http.get<Guest>(url, { params });
  }

  getGuest(): string | null {
    return localStorage.getItem('tmdb_guest_session');
  }

}
