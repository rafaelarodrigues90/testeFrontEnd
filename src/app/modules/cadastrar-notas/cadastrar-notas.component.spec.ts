import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarNotasComponent } from './cadastrar-notas.component';

describe('CadastrarNotasComponent', () => {
  let component: CadastrarNotasComponent;
  let fixture: ComponentFixture<CadastrarNotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarNotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
