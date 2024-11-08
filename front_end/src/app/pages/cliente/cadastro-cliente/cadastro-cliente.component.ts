import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Cliente } from '../../../models/cliente.model';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.css'
})
export class CadastroClienteComponent implements OnInit {
  loading: boolean = false;
  page: number = 1;

  constructor(
    private _formBuilder: FormBuilder,
    private _clienteService: ClienteService
  ) {}

  ngOnInit(): void {
  }

  formCliente = this._formBuilder.group({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl(''),
    telefone: new FormControl('', [Validators.required]),
    endereco: new FormControl('', [Validators.required]),
    numero: new FormControl(null),
    complemento: new FormControl(''),
    bairro: new FormControl('', [Validators.required]),
    cidade: new FormControl('', [Validators.required])
  })

  formFiltros = this._formBuilder.group({
    nome: new FormControl('')
  })

  async registrarCliente() {
    this.loading = true;
    if (this.formCliente.valid) {
      const dadosCliente = this.formCliente.value;
      const cliente: Cliente = {
        nome: dadosCliente.nome ?? '',
        email: dadosCliente.email ?? '',
        telefone: dadosCliente.telefone ?? '',
        endereco: dadosCliente.endereco ?? '',
        numero: dadosCliente.numero ?? 0,
        complemento: dadosCliente.complemento ?? '',
        bairro: dadosCliente.bairro ?? '',
        cidade: dadosCliente.cidade ?? ''
      }

      this._clienteService.postCliente(cliente).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.error(error);
        }
      )
    } else {

    }
  }

  listaClientes: any[] = []
  recuperarClientes() {}

  limparFiltrosClientes() {}
}
