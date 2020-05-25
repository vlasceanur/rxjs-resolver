import { TestBed } from '@angular/core/testing';

import { FakeLoaderService } from './fake-loader.service';

describe('FakeLoaderService', () => {
  let service: FakeLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
