import { TestBed } from '@angular/core/testing';

import { UserLearningDataService } from './user-learning-data.service';

describe('UserLearningDataService', () => {
  let service: UserLearningDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLearningDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
