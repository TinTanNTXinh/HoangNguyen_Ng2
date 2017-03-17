/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UtilitiesService } from './utilities.service';

describe('UtilitiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilitiesService]
    });
  });

  it('should ...', inject([UtilitiesService], (service: UtilitiesService) => {
    expect(service).toBeTruthy();
  }));
});
