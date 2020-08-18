import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appAcheiDocumento';
  animal: string;
  name: string;

  constructor(public dialog: MatDialog){}

  /**onNoClick(): void {
    this.dialogRef.close();
  }

  <div class="container">
  <div class="example-button-row">
    <button mat-button color="primary">Achei</button>
    <button mat-raised-button (click)="openDialog()" color="primary">Perdi</button>
  </div>

  <div mat-dialog-actions>
    <button mat-button (click)="onNoClick()">No Thanks</button>
    <button mat-button [mat-dialog-close]="data.animal" cdkFocusInitial>Ok</button>
  </div>
  
</div>*/
}
