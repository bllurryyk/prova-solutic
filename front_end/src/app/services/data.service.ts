import { Injectable } from '@angular/core';
import { MenuAdm } from '../data/menu';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getMenuAdm() {
    return MenuAdm.Categorias.map(categorias => {
      const menuFiltrado = categorias.menu;

      return {
        ...categorias,
        menu: menuFiltrado
      };
    }).flat();
  }
}
