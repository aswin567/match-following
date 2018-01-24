import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchFollowingComponent } from './match-following.component';

describe('MatchFollowingComponent', () => {
  let component: MatchFollowingComponent;
  let fixture: ComponentFixture<MatchFollowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchFollowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchFollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
