import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdDispComponent } from './id-disp.component';

describe('IdDispComponent', () => {
  let component: IdDispComponent;
  let fixture: ComponentFixture<IdDispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdDispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdDispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
