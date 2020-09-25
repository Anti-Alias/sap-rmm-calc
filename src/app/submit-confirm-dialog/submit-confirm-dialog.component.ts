import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-submit-confirm-dialog',
  templateUrl: './submit-confirm-dialog.component.html',
  styleUrls: ['./submit-confirm-dialog.component.css']
})
export class SubmitConfirmDialogComponent {

  constructor(
    private dialogRef: MatDialogRef<SubmitConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) {}

  close(result: string): void {
    this.dialogRef.close(result)
  }
}
