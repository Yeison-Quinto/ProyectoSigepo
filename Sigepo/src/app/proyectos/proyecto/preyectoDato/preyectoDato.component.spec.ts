/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PreyectoDatoComponent } from './preyectoDato.component';

describe('PreyectoDatoComponent', () => {
  let component: PreyectoDatoComponent;
  let fixture: ComponentFixture<PreyectoDatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreyectoDatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreyectoDatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
