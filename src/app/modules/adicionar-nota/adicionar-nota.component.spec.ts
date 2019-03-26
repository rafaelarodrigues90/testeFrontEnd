import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarNotaComponent } from './adicionar-nota.component';

describe('AdicionarNotaComponent', () => {
  let component: AdicionarNotaComponent;
  let fixture: ComponentFixture<AdicionarNotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarNotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
