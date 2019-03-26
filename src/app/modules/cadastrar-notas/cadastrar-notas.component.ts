import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'cadastrar-notas',
  templateUrl: './cadastrar-notas.component.html',
  styleUrls: ['./cadastrar-notas.component.scss']
})
export class CadastrarNotasComponent implements OnInit {

  constructor() { }

  @Input()
  notas 

  ngOnInit() {
  }

}
