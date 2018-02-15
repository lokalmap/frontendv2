import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoeditComponent } from './info-edit.component';

describe('InfoComponent', () => {
  let component: InfoeditComponent;
  let fixture: ComponentFixture<InfoeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
