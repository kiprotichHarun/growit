import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsokoPage } from './esoko.page';

describe('EsokoPage', () => {
  let component: EsokoPage;
  let fixture: ComponentFixture<EsokoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsokoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsokoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
