import { TestBed } from '@angular/core/testing';

import { SecugenService } from './services/secugen.service';

describe('SecugenService', () => {
  let service: SecugenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecugenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
