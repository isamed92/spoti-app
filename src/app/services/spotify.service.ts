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
      'Authorization': 'Bearer BQCPKqKjT-zv3Rg0PgBm6fPQ-hoV9yR40z8gA5cGsAbUPEVP2Gvs_TxA1zYrbJ5U0SdOmg_yF4goPck9cnM'
    });
    return this.http
      .get('https://api.spotify.com/v1/browse/new-releases', { headers });

  }
}
