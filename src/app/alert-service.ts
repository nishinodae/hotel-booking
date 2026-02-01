import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private alertMessage = new Subject<string>;

  sendAlert(message: string) {
    this.alertMessage.next(message);
  }

  getAlert(): Observable<string> {
    return this.alertMessage;
  }
}
