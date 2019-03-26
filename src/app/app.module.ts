import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BigNumberComponent } from './components/big-number/big-number.component';
import { AdicionarNotaComponent } from './modules/adicionar-nota/adicionar-nota.component';
import { CadastrarNotasComponent } from './modules/cadastrar-notas/cadastrar-notas.component';

import { ClienteService } from './sevices/clientes-service';
import { ClienteDetailComponent } from './modules/cliente-detail/cliente-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    BigNumberComponent,
    AdicionarNotaComponent,
    CadastrarNotasComponent,
    ClienteDetailComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR'},
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
