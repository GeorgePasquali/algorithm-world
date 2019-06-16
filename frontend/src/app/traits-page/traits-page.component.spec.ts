import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitsPageComponent } from './traits-page.component';

describe('TraitsPageComponent', () => {
  let component: TraitsPageComponent;
  let fixture: ComponentFixture<TraitsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraitsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
