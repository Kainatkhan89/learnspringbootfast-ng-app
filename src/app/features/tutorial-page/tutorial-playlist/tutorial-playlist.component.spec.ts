import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialPlaylistComponent } from './tutorial-playlist.component';

describe('TutorialPlaylistComponent', () => {
  let component: TutorialPlaylistComponent;
  let fixture: ComponentFixture<TutorialPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorialPlaylistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorialPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
