import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { map } from 'rxjs';
import { response } from 'express';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  getClientes() {
    const url = `${environment.api}/clientes/get`;
    return this._httpClient.get<Object>(url).pipe(
      map((response: any) => {
        return response;
      })
    )
  }

  postCliente(cliente: Cliente) {
    const url = `${environment.api}/clientes/post`;
    return this._httpClient.post<Object>(url, cliente).pipe(
      map((response: any) => {
        return response;
      })
    )
  }
}
