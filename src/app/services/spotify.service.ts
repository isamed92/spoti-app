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
      'Authorization': 'Bearer BQCVgQyK6rRHpIhxh-IRDknxeHZp-VYexTZ1tm720f3wPxVglAcov_lIY1ui13ibknl2CLLkPo0wUMWdOio'
    });
    return this.http.get(url, {headers});
  }


  getNewReleases() {
    return this.getQuery('browse/new-releases')
                  .pipe(map(data => data['albums'].items));
  }

  getArtistas(terminoBusqueda: string) {
    return this.getQuery(`search?q=${ terminoBusqueda }&type=artist&limit=15`)
                  .pipe(map(data => data['artists'].items));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
                // .pipe( map(data => data["artists"].items) );
  }

}
