import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavingHandComponent } from './waving-hand.component';

describe('WavingHandComponent', () => {
  let component: WavingHandComponent;
  let fixture: ComponentFixture<WavingHandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WavingHandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WavingHandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
