import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'adicionar-nota',
  templateUrl: './adicionar-nota.component.html',
  styleUrls: ['./adicionar-nota.component.scss']
})
export class AdicionarNotaComponent implements OnInit {
  
  @Input()
  nota={}
  @Input()
  isDisabled=false
  @Output()
  adicionarNota = new EventEmitter<any>();

  save(){
    this.adicionarNota.emit(JSON.parse(JSON.stringify(this.nota)))
    this.nota = {}
  }
  isInvalid(){
    return false
  }

  constructor() { }

  ngOnInit() {
  }

}
