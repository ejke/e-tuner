import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowLowComponent } from './arrow-low.component';

describe('ArrowLowComponent', () => {
  let component: ArrowLowComponent;
  let fixture: ComponentFixture<ArrowLowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowLowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
