import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'big-number',
  templateUrl: './big-number.component.html',
  styleUrls: ['./big-number.component.scss']
})
export class BigNumberComponent implements OnInit {

  @Input()
  label:String = 'teste';
  @Input()
  value;
  
  constructor() { }

  ngOnInit() {
  }

}
