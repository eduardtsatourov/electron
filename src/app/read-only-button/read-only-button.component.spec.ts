import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnlyButtonComponent } from './read-only-button.component';

describe('ReadOnlyButtonComponent', () => {
  let component: ReadOnlyButtonComponent;
  let fixture: ComponentFixture<ReadOnlyButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadOnlyButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOnlyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
