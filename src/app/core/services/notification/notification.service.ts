import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  showSuccess(message: string, duration: number = 3000): void {
    this.showNotification(message, 'success-snackbar', duration);
  }

  showError(message: string, duration: number = 3000): void {
    this.showNotification(message, 'error-snackbar', duration);
  }

  private showNotification(message: string, panelClass: string, duration: number): void {
    const config: MatSnackBarConfig = {
      duration,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: [panelClass],
    };

    this.snackBar.open(message, 'Close', config);
  }
}
