import { TestBed } from '@angular/core/testing';

import { Ng8ConnectionService } from './ng8-connection.service';

describe('Ng8ConnectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ng8ConnectionService = TestBed.get(Ng8ConnectionService);
    expect(service).toBeTruthy();
  });
});
