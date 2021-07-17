import { TestBed } from '@angular/core/testing';

import { MarksheetServiceService } from './marksheet-service.service';

describe('MarksheetServiceService', () => {
  let service: MarksheetServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarksheetServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
