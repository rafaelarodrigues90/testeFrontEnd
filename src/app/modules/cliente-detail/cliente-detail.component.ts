import { Component, OnInit } from '@angular/core';
import { Input,Output,EventEmitter } from '@angular/core/';

@Component({
  selector: 'cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.scss']
})
export class ClienteDetailComponent implements OnInit {

  @Input()
  cliente

  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor() { }

  goBack(){
    this.close.emit(null)
  }

  ngOnInit() {
  }

}
