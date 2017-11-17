import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookinghistComponent } from './bookinghist.component';

describe('BookinghistComponent', () => {
  let component: BookinghistComponent;
  let fixture: ComponentFixture<BookinghistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookinghistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookinghistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
