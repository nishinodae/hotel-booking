import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class LocalStorage {
  storeData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getData(key: string) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
}
