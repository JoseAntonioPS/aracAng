import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharaPageComponent } from './chara-page.component';

describe('CharaPageComponent', () => {
  let component: CharaPageComponent;
  let fixture: ComponentFixture<CharaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
