import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenPanelComponent } from './even-panel.component';

describe('EvenPanelComponent', () => {
  let component: EvenPanelComponent;
  let fixture: ComponentFixture<EvenPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
