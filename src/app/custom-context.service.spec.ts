/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustomContextService } from './custom-context.service';

describe('Service: CustomContext', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomContextService]
    });
  });

  it('should ...', inject([CustomContextService], (service: CustomContextService) => {
    expect(service).toBeTruthy();
  }));
});
