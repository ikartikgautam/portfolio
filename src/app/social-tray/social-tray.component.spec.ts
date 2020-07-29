import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialTrayComponent } from './social-tray.component';

describe('SocialTrayComponent', () => {
  let component: SocialTrayComponent;
  let fixture: ComponentFixture<SocialTrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialTrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
