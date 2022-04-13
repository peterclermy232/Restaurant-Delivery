import { TestBed } from '@angular/core/testing';

import { ContactGuardGuard } from './contact-guard.guard';

describe('ContactGuardGuard', () => {
  let guard: ContactGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ContactGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
