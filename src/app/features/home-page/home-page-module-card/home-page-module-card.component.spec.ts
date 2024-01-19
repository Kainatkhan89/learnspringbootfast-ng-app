import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageModuleCardComponent } from './home-page-module-card.component';

describe('HomePageModuleCardComponent', () => {
  let component: HomePageModuleCardComponent;
  let fixture: ComponentFixture<HomePageModuleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageModuleCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePageModuleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
