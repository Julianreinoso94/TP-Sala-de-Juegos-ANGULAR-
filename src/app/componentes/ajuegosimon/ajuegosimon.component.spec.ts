import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjuegosimonComponent } from './ajuegosimon.component';

describe('AjuegosimonComponent', () => {
  let component: AjuegosimonComponent;
  let fixture: ComponentFixture<AjuegosimonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjuegosimonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjuegosimonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
