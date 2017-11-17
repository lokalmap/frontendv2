import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorehistComponent } from './storehist.component';

describe('StorehistComponent', () => {
  let component: StorehistComponent;
  let fixture: ComponentFixture<StorehistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorehistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorehistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
