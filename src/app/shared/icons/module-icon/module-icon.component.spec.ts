import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleIconComponent } from './module-icon.component';

describe('ModuleIconComponent', () => {
  let component: ModuleIconComponent;
  let fixture: ComponentFixture<ModuleIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModuleIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
