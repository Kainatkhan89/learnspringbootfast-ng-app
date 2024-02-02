import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistModuleContentsComponent } from './playlist-module-contents.component';

describe('PlaylistModuleContentsComponent', () => {
  let component: PlaylistModuleContentsComponent;
  let fixture: ComponentFixture<PlaylistModuleContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistModuleContentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaylistModuleContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
