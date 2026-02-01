import { Component, inject, OnInit } from '@angular/core';
import { RoomCardComponent } from '../room-card-component/room-card-component';
import { CommonModule } from '@angular/common';
import { Mockapi } from '../mockapi';
import { map, Observable } from 'rxjs';
import { Room } from '../room';

@Component({
  selector: 'app-home',
  imports: [RoomCardComponent, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home implements OnInit {
  roomService: Mockapi = inject(Mockapi);
  data$!: Observable<Room[]>;
  filteredRoom$!: Observable<Room[]>;

  ngOnInit(): void {
    this.data$ = this.roomService.getAllRoom();
    this.filteredRoom$ = this.data$;
  }

  getFilteredRoom(roomType: string) {
    this.filteredRoom$ = this.data$.pipe(
      map(rooms => rooms.filter(room => room.roomType === roomType))
    );
  }

  getAllRoom() {
    this.filteredRoom$ = this.data$;
  }
}