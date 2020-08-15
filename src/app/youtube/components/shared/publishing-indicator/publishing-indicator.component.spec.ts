import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishingIndicatorComponent } from './publishing-indicator.component';

describe('PublishingIndicatorComponent', () => {
  let component: PublishingIndicatorComponent;
  let fixture: ComponentFixture<PublishingIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishingIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishingIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
