import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OutsetService {
  baseUrl: string = 'https://api.spotify.com/v1';
  constructor(private http: HttpClient) { }

  getRecent(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/me/playlists?limit=8&offset=8`);
  }

  getUserInfo(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/me`);
  }

  getNewReleases(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/browse/new-releases?limit=06`);
  }

  getFeaturedPlaylists(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/browse/featured-playlists?limit=06`);
  }

}
