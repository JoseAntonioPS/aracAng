import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesInfComponent } from './des-inf.component';

describe('DesInfComponent', () => {
  let component: DesInfComponent;
  let fixture: ComponentFixture<DesInfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesInfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
