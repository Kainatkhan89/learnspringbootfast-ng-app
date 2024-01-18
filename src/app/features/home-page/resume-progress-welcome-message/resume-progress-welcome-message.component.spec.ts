import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeProgressWelcomeMessageComponent } from './resume-progress-welcome-message.component';

describe('ResumeProgressWelcomeMessageComponent', () => {
  let component: ResumeProgressWelcomeMessageComponent;
  let fixture: ComponentFixture<ResumeProgressWelcomeMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeProgressWelcomeMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumeProgressWelcomeMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
