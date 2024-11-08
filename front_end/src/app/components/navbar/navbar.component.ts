import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  menuItems: any[] = [];

  constructor(
    private _dataService: DataService
  ) {}

  ngOnInit(): void {
    this.menuItems = this._dataService.getMenuAdm();
  }
}
