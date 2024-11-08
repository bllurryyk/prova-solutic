import { inject, Injectable } from '@angular/core';
import { DialogAlertComponent } from '../components/dialog-alert/dialog-alert.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  readonly dialog = inject(MatDialog);

  constructor() { }

  showAlertDialog(status: number, message: string) {
    var title = '';
    if (status === 0) {
      title = '🟢Sucesso';
    } else if (status === 1) {
      title = '🟠Atenção';
    } else {
      title = '🔴Erro';
    }
    const dialogRef = this.dialog.open(DialogAlertComponent, {
      data: {
        title: title,
        content: message
      }
    })
  }
}
