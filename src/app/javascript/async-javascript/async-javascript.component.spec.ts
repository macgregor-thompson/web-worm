import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncJavascriptComponent } from './async-javascript.component';

describe('AsyncJavascriptComponent', () => {
  let component: AsyncJavascriptComponent;
  let fixture: ComponentFixture<AsyncJavascriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncJavascriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncJavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
