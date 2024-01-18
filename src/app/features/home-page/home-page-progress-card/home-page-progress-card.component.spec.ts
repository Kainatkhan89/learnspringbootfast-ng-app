import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageProgressCardComponent } from './home-page-progress-card.component';

describe('HomePageProgressCardComponent', () => {
  let component: HomePageProgressCardComponent;
  let fixture: ComponentFixture<HomePageProgressCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageProgressCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePageProgressCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
