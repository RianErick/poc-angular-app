import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalcreateComponent } from './modalcreate.component';

describe('ModalcreateComponent', () => {
  let component: ModalcreateComponent;
  let fixture: ComponentFixture<ModalcreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalcreateComponent]
    });
    fixture = TestBed.createComponent(ModalcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
