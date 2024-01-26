import { TestBed } from '@angular/core/testing';

import { TutorialResolverService } from './tutorial-resolver.service';

describe('TutorialResolverService', () => {
  let service: TutorialResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorialResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
