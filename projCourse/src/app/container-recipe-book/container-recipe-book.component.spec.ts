import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerRecipeBookComponent } from './container-recipe-book.component';

describe('ContainerRecipeBookComponent', () => {
  let component: ContainerRecipeBookComponent;
  let fixture: ComponentFixture<ContainerRecipeBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerRecipeBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerRecipeBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
