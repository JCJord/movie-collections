import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SearchResponse } from 'src/app/models/movie.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  searchMovies(query: string, page: number = 2): Observable<SearchResponse> {
    console.log(query)
    const params = new HttpParams()
      .set('query', query)
      .set('include_adult', 'false')
      .set('language', 'en-US')
      .set('page', page.toString())
      .set('api_key', environment.tmdbApiKey);

  return this.http.get<SearchResponse>(this.apiUrl, { params });
  }

}
