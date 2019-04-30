import { TestBed } from '@angular/core/testing';

import { UrlStoreService } from './url-store.service';

describe('UrlStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrlStoreService = TestBed.get(UrlStoreService);
    expect(service).toBeTruthy();
  });
});
