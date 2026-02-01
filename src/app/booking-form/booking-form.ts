import { Component, inject, Input, signal, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { NgbCalendar, NgbDate, NgbDateParserFormatter, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap/datepicker';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap/modal';
import { Room } from '../room';

// trim input before validate min length
export const trimmedMinLength = (minLength: number) => {
  return (control: AbstractControl<string>): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }
    const trimmedValue = control.value.toString().trim();
    return trimmedValue.length >= minLength ? null : {
      minLength: { requiredLength: minLength, actualLength: trimmedValue.length }
    }
  }
}

@Component({
  selector: 'booking-form',
  imports: [ReactiveFormsModule, NgbInputDatepicker,
  ],
  templateUrl: './booking-form.html',
  styleUrl: './booking-form.css',
})

export class BookingForm {
  @Input() room!: Room;
  activeModal = inject(NgbActiveModal);

  bookingForm = new FormGroup({
    fullName: new FormControl<string>('', { validators: [Validators.required, trimmedMinLength(3)] }),
    checkIn: new FormControl<string>('', Validators.required),
    checkOut: new FormControl<string>('', Validators.required),
  });

  calendar = inject(NgbCalendar);
  formatter = inject(NgbDateParserFormatter);

  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate | null = null;
  toDate: NgbDate | null = null;
  minDate = this.calendar.getToday();

  numberOfDays = signal(-1);

  onDateSelection(date: NgbDate, datepicker: NgbInputDatepicker) {
    const newDate = date.year + '-' + date.month + '-' + date.day;
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
      this.bookingForm.controls.checkIn.setValue(newDate);
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
      this.bookingForm.controls.checkOut.setValue(newDate);
      this.calculateDays();
      datepicker.close();
    }
    else {
      this.toDate = null;
      this.fromDate = date;
      this.bookingForm.controls.checkIn.setValue(newDate);
      this.bookingForm.controls.checkOut.setValue(null);
    }
  }

  isHovered(date: NgbDate) {
    return (
      this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }

  handleDateInput(currentValue: NgbDate | null, input: string, dateType: string) {
    const parsed = this.formatter.parse(input);
    const finalparsed = parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;

    if (dateType === 'from') {
      this.fromDate = finalparsed;
    } else {
      this.toDate = finalparsed;
    }
    parsed != null ? this.calculateDays() : this.numberOfDays.update(() => -1);
  }

  calculateDays() {
    const fromTime = new Date(this.fromDate?.year + '-' + this.fromDate?.month + '-' + this.fromDate?.day).getTime();
    const toTime = new Date(this.toDate?.year + '-' + this.toDate?.month + '-' + this.toDate?.day).getTime();
    this.numberOfDays.update(() => (toTime - fromTime) / (24 * 60 * 60 * 1000)
    )
  }
}
