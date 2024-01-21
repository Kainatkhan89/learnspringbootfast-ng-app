import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageLearningPathComponent } from './home-page-learning-path.component';

describe('HomePageLearningPathComponent', () => {
  let component: HomePageLearningPathComponent;
  let fixture: ComponentFixture<HomePageLearningPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageLearningPathComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePageLearningPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
