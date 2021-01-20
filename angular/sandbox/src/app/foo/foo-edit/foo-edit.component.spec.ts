import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooEditComponent } from './foo-edit.component';

describe('FooEditComponent', () => {
  let component: FooEditComponent;
  let fixture: ComponentFixture<FooEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
