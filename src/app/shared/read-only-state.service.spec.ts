import { TestBed } from '@angular/core/testing';

import { ReadOnlyStateService } from './read-only-state.service';

describe('ReadOnlyStateService', () => {
  let service: ReadOnlyStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadOnlyStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
