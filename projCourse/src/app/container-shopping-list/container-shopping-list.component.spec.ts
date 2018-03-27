import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerShoppingListComponent } from './container-shopping-list.component';

describe('ContainerShoppingListComponent', () => {
  let component: ContainerShoppingListComponent;
  let fixture: ComponentFixture<ContainerShoppingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerShoppingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
