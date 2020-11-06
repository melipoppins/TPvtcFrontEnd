import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmpruntComponent } from './create-emprunt.component';

describe('CreateEmpruntComponent', () => {
  let component: CreateEmpruntComponent;
  let fixture: ComponentFixture<CreateEmpruntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmpruntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmpruntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
