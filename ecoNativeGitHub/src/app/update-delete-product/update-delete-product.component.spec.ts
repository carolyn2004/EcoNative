import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeleteProductComponent } from './update-delete-product.component';

describe('UpdateDeleteProductComponent', () => {
  let component: UpdateDeleteProductComponent;
  let fixture: ComponentFixture<UpdateDeleteProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDeleteProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDeleteProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
