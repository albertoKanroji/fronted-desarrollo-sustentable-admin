import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsCrearComponent } from './tags-crear.component';

describe('TagsCrearComponent', () => {
  let component: TagsCrearComponent;
  let fixture: ComponentFixture<TagsCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagsCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagsCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
