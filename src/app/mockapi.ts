import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import { Room } from './room';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Mockapi {
  private http = inject(HttpClient);
  private baseURL = `https://${environment.mockApiKey}.mockapi.io/rooms`;

  getAllRoom(): Observable<Room[]> {
    return this.http.get<Room[]>(this.baseURL);
  }
}
