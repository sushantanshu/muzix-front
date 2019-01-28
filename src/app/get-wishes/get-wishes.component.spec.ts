import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetWishesComponent } from './get-wishes.component';

describe('GetWishesComponent', () => {
  let component: GetWishesComponent;
  let fixture: ComponentFixture<GetWishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetWishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetWishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
