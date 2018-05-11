import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OddPanelComponent } from './odd-panel.component';

describe('OddPanelComponent', () => {
  let component: OddPanelComponent;
  let fixture: ComponentFixture<OddPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OddPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OddPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
