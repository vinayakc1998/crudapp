import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofstudentComponent } from './listofstudent.component';

describe('ListofstudentComponent', () => {
  let component: ListofstudentComponent;
  let fixture: ComponentFixture<ListofstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
