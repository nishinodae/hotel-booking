import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, filter, map, tap } from 'rxjs';
import { Room } from './room';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Mockapi {
  private baseURL = `https://${environment.mockApiKey}.mockapi.io/rooms`;
  private dataSubject = new BehaviorSubject<Room[]>([]);
  data$ = this.dataSubject.asObservable();

  constructor(private http: HttpClient){
    // load on service initialisation
    this.getAllRoom();
  }

  getAllRoom(): void {
    this.http.get<Room[]>(this.baseURL).subscribe(data =>{
      this.dataSubject.next(data);
    })
  }

  updateRoom(id: number, updatedData:Room): Observable<Room> {
    const url = `${this.baseURL}/${id}`;
    return this.http.put<Room>(url, updatedData).pipe(
      tap(
        updatedRoom => {
          const currentData = this.dataSubject.value;
          const index = currentData.findIndex(item => item.id === id);
          if(index != -1){
            currentData[index] = updatedRoom;
            this.dataSubject.next([...currentData]);
          }
        }
      )
    )
  }
}