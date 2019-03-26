import { Component } from '@angular/core';
import { ClienteService } from './sevices/clientes-service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';
  clientes = [];
  pontos = {};
  clienteSelecionado;
  notas=[];

  constructor(private clienteService: ClienteService) {
  }
  ngOnInit(): void {
    this.clienteService.getClientes().then(response => this.clientes = response );
  }

  public selectClient(cliente?){
    this.clearSection()

    if(cliente){
      this.clienteService.getCliente(cliente).then(response => this.clienteSelecionado = response )   
      this.clienteService.getPontos(cliente).then(response => this.validatePoints(response))   
    }
  }
  public onSearchChange(filter){
    this.clienteService.getClientes(filter).then(response => this.clientes = response );
  }
  public clearSection(){
    if(this.notas.length){
      var txt;
      var mensagem = confirm("Você não salvou suas notas, deseja mesmo sair da página?");
      if (mensagem == true) {
          this.clear()
      } else {
          txt = "You pressed Cancel!";
      }
    }else{
      this.clear()
    }
  }
  protected clear(){
    this.clienteSelecionado = undefined;
    this.pontos = {};
  }

  protected validatePoints(pontos){
    this.pontos = pontos;
    this.pontos['saldo'] = pontos.total - pontos.utilizados - pontos.expirados
  }
  adicionarNota(nota){
    let id = !this.notas.length ? 0 : this.notas.reduce( ( val, last ) => val.id > last.id ? val : last  ).id
    nota.id = id + 1
    this.notas.push(nota)
  }
  salvarNotas(){
    this.clienteService.postNotas(this.notas)
  }

}
