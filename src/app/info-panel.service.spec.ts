import { TestBed } from '@angular/core/testing';

import { InfoPanelService } from './info-panel.service';

describe('InfoPanelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoPanelService = TestBed.get(InfoPanelService);
    expect(service).toBeTruthy();
  });
});
