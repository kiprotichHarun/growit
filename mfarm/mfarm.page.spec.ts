import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MfarmPage } from './mfarm.page';

describe('MfarmPage', () => {
  let component: MfarmPage;
  let fixture: ComponentFixture<MfarmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfarmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfarmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
