import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorisedPageComponent } from './authorised-page.component';

describe('AuthorisedPageComponent', () => {
  let component: AuthorisedPageComponent;
  let fixture: ComponentFixture<AuthorisedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorisedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorisedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
