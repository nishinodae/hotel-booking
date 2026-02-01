import { Component } from '@angular/core';
import { LocalStorage } from '../local-storage';

@Component({
  selector: 'user-bookings',
  imports: [],
  templateUrl: './user-bookings.html',
  styleUrl: './user-bookings.css',
})
export class UserBookings {
  constructor(private localStore: LocalStorage) {
    this.bookings = localStore.getData(this.localKey);
  }
  localKey = 'bookings';
  bookings;
}
