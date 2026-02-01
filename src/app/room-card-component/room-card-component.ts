import { Component, inject, Input } from '@angular/core';
import { Room } from '../room';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal';
import { BookingForm } from '../booking-form/booking-form';

@Component({
  selector: 'room-card-component',
  imports: [CommonModule],
  templateUrl: './room-card-component.html',
  styleUrl: './room-card-component.css',
})
export class RoomCardComponent {
  @Input() room!: Room;
  private modalService = inject(NgbModal);

  open() {
    const modalRef = this.modalService.open(BookingForm, { size: 'xl', centered: true },);
    modalRef.componentInstance.room = this.room;
  }
}
