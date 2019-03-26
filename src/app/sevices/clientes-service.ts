import { Injectable } from "@angular/core";
import { HttpModule, Http } from '@angular/http';
import {clientes} from '../mock/clientes';
import {cliente} from '../mock/cliente';
import {pontos} from '../mock/pontos';

@Injectable()
export class ClienteService {
  
  constructor(public http: Http) {
  }

  getClientes (filter=''):Promise<any>{
    return new Promise( (resolve) => resolve(clientes.filter( cliente =>
      cliente.nome.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) != -1 ) ));
  }
  getCliente (cli):Promise<any>{
    return new Promise( (resolve) => {
      var newCliente = {}
      for( let key in cliente ) newCliente[key] = cli[key] ? cli[key] : cliente[key]
      resolve(newCliente)
    } );
  }
  getPontos (id):Promise<any>{
    return new Promise( (resolve) => resolve(pontos) );
  }
  postNotas(notas):Promise<any>{
    return new Promise( (resolve) => resolve(notas) );
  }
}