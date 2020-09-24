import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-submit-confirm-dialog',
  templateUrl: './submit-confirm-dialog.component.html',
  styleUrls: ['./submit-confirm-dialog.component.css']
})
export class SubmitConfirmDialogComponent {

  constructor(private dialogRef: MatDialogRef<SubmitConfirmDialogComponent>) {}

  close(result: string): void {
    this.dialogRef.close(result)
  }
}
