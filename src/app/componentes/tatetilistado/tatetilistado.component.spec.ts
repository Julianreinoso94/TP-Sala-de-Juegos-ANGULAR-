import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TatetilistadoComponent } from './tatetilistado.component';

describe('TatetilistadoComponent', () => {
  let component: TatetilistadoComponent;
  let fixture: ComponentFixture<TatetilistadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TatetilistadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TatetilistadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
