import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient
  ) {
    console.log('spotify service listo');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQABzJZDpCWRa9poRcH3qIoijZ4F-VnObRYRiLQmZj0hKDA80ZRH4G21dr3YLMNJdqz5b731KZSECWe9f6A'
    });
    return this.http.get(url, {headers});
  }


  getNewReleases() {
    return this.getQuery('browse/new-releases')
                  .pipe(map(data => data['albums'].items));
  }

  getArtista(terminoBusqueda: string) {
    return this.getQuery(`search?q=${ terminoBusqueda }&type=artist&limit=15`)
                  .pipe(map(data => data['artists'].items));
  }
}
