/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HomepageService } from './home.service';

describe('Component: Home', () => {
  it('should create an instance', () => {
    let homeservice = new HomepageService
    let component = new HomeComponent(homeservice);
    expect(component).toBeTruthy();
  });
});
