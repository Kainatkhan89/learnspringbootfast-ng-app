import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetProgressModalComponent } from './reset-progress-modal.component';

describe('ResetProgressModalComponent', () => {
  let component: ResetProgressModalComponent;
  let fixture: ComponentFixture<ResetProgressModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetProgressModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResetProgressModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
