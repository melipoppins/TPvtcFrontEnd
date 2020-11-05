import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConducteurComponent } from './create-conducteur.component';

describe('CreateConducteurComponent', () => {
  let component: CreateConducteurComponent;
  let fixture: ComponentFixture<CreateConducteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateConducteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateConducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
