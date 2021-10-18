import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowHighComponent } from './arrow-high.component';

describe('ArrowHighComponent', () => {
  let component: ArrowHighComponent;
  let fixture: ComponentFixture<ArrowHighComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowHighComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
