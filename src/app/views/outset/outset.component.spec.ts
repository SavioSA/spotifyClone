import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsetComponent } from './outset.component';

describe('OutsetComponent', () => {
  let component: OutsetComponent;
  let fixture: ComponentFixture<OutsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
