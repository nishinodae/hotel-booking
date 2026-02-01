import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { RoomCardComponent } from '../room-card-component/room-card-component';
import { CommonModule } from '@angular/common';
import { Mockapi } from '../mockapi';
import { map, Observable, Subscription} from 'rxjs';
import { Room } from '../room';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap/alert';
import { AlertService } from '../alert-service';

@Component({
  selector: 'app-home',
  imports: [RoomCardComponent, CommonModule, NgbAlert],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home implements OnInit {
  roomService: Mockapi = inject(Mockapi);
  constructor(private alertService: AlertService){}
  data$!: Observable<Room[]>;
  filteredRoom$!: Observable<Room[]>;

  alertMessage$!:Observable<string>;
  // alertMessage:string = this.alertMessage$.toString().substring(0,5);
// alertMessage = '';
  ngOnInit(): void {
    this.data$ = this.roomService.getAllRoom();
    this.filteredRoom$ = this.data$;
    this.alertMessage$= this.alertService.getAlert();
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