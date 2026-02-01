import { TestBed } from '@angular/core/testing';

import { Mockapi } from './mockapi';

describe('Mockapi', () => {
  let service: Mockapi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mockapi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
