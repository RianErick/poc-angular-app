import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudLivroComponent } from './crud-livro.component';

describe('CrudLivroComponent', () => {
  let component: CrudLivroComponent;
  let fixture: ComponentFixture<CrudLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudLivroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
