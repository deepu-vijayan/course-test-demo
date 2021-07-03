import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(public dialog: MatDialog) { }

  openModal(details){
    const dialogRef = this.dialog.open(details.component, {
      width: '80%',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}
