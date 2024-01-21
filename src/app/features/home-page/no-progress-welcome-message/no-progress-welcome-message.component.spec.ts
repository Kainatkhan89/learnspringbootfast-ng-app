import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoProgressWelcomeMessageComponent } from './no-progress-welcome-message.component';

describe('NoProgressWelcomeMessageComponent', () => {
  let component: NoProgressWelcomeMessageComponent;
  let fixture: ComponentFixture<NoProgressWelcomeMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoProgressWelcomeMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoProgressWelcomeMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
