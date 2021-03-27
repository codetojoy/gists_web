import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPlayerComponent } from './no-player.component';

describe('NoPlayerComponent', () => {
  let component: NoPlayerComponent;
  let fixture: ComponentFixture<NoPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
