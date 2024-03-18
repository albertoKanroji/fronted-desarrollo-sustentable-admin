import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionCrearEditComponent } from './publicacion-crear-edit.component';

describe('PublicacionCrearEditComponent', () => {
  let component: PublicacionCrearEditComponent;
  let fixture: ComponentFixture<PublicacionCrearEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionCrearEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicacionCrearEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
