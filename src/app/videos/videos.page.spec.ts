import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosPage } from './videos.page';

describe('VideosPage', () => {
  let component: VideosPage;
  let fixture: ComponentFixture<VideosPage>;
  let videosPage: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have a list of 10 elements', () => {
    videosPage = fixture.nativeElement;
    const items = videosPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });
});
