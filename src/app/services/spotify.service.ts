import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient
  ) {
    console.log('spotify service listo');
  }


  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA1uagrY1TH6w7qNrO9QboxgDM19fJzs1PWxmkYcWKEf9o1BGeg0yvd447eRJQOgKk8zdSI7hV9NARZOzg'
    });
    return this.http
      .get('https://api.spotify.com/v1/browse/new-releases', { headers });

  }

  getArtista(terminoBusqueda: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA1uagrY1TH6w7qNrO9QboxgDM19fJzs1PWxmkYcWKEf9o1BGeg0yvd447eRJQOgKk8zdSI7hV9NARZOzg'
    });
    return this.http
      .get(`https://api.spotify.com/v1/search?q=${ terminoBusqueda }&type=artist&limit=15`, { headers });
  }
}
