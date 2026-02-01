import { Component, inject, Input } from '@angular/core';
import { Room } from '../room';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'room-card-component',
  imports: [CommonModule],
  templateUrl: './room-card-component.html',
  styleUrl: './room-card-component.css',
})
export class RoomCardComponent {
  @Input() room!: Room;
}
