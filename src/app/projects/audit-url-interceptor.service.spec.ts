import { TestBed } from '@angular/core/testing';

import { AuditUrlInterceptorService } from './audit-url-interceptor.service';

describe('AuditUrlInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuditUrlInterceptorService = TestBed.get(AuditUrlInterceptorService);
    expect(service).toBeTruthy();
  });
});
