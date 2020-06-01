import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharaCardComponent } from './chara-card.component';

describe('CharaCardComponent', () => {
  let component: CharaCardComponent;
  let fixture: ComponentFixture<CharaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
