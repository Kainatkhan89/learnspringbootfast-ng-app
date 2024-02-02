import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialPlaylistItemComponent } from './tutorial-playlist-item.component';

describe('TutorialPlaylistItemComponent', () => {
  let component: TutorialPlaylistItemComponent;
  let fixture: ComponentFixture<TutorialPlaylistItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorialPlaylistItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorialPlaylistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
