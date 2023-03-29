import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPetsComponent } from './add-edit-pets.component';

describe('AddEditPetsComponent', () => {
  let component: AddEditPetsComponent;
  let fixture: ComponentFixture<AddEditPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
