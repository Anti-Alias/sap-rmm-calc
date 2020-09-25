import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-acknowledge-dialog',
  templateUrl: './acknowledge-dialog.component.html',
  styleUrls: ['./acknowledge-dialog.component.css']
})
export class AcknowledgeDialogComponent {

  constructor(
    private dialogRef: MatDialogRef<AcknowledgeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) {}

  confirm(): void {
    this.dialogRef.close()
  }
}
