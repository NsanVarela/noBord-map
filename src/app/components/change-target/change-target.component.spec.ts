import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTargetComponent } from './change-target.component';

describe('ChangeTargetComponent', () => {
  let component: ChangeTargetComponent;
  let fixture: ComponentFixture<ChangeTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
