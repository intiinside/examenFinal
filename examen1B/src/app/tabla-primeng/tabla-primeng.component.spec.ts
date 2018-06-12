import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPrimengComponent } from './tabla-primeng.component';

describe('TablaPrimengComponent', () => {
  let component: TablaPrimengComponent;
  let fixture: ComponentFixture<TablaPrimengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaPrimengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
