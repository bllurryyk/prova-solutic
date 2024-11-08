import { Component, Input } from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrl: './header-page.component.css'
})
export class HeaderPageComponent {
  @Input() icon: string = '';
  @Input() title: string = '';

  constructor (
  ) {}
}
