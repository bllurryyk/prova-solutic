import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  loading: boolean = false;
  page: number = 1;

  constructor(
    private _formBuilder: FormBuilder,
    private _clienteService: ClienteService,
    private _utilsService: UtilsService
  ) {}

  ngOnInit(): void {
    this.recuperarClientes();
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
          if (response.erro === false) {
            this.recuperarClientes();
            this._utilsService.showAlertDialog(0, 'Cliente cadastrado com sucesso.');
          } else {
            this._utilsService.showAlertDialog(2, 'Ocorreu um erro, favor tentar novamente mais tarde.');
          }
        },
        (error) => {
          console.error(error);
          this._utilsService.showAlertDialog(2, 'Ocorreu um erro, favor tentar novamente mais tarde.');
        }
      )
    } else {
      this._utilsService.showAlertDialog(1, 'Você precisa preencher todos os campos obrigatórios');
    }
  }

  listaClientes: any[] = []
  recuperarClientes() {
    this._clienteService.getClientes().subscribe(
      (response) => {
        this.listaClientes = response;
      },
      (error) => {
        console.error(error);
      }
    )
  }

  limparFiltrosClientes() {}
}
