import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as BookActions from '../../../core/services/store/book.actions';
import { dateValidator } from 'src/app/shared/validators/date.validators';
import { NotificationService } from 'src/app/core/services/notification/notification.service';
@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {
  bookForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private store: Store, 
    private router: Router,
    private notificationService: NotificationService) {

    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      publishedDate: ['', [Validators.required,  dateValidator()]],
      imageUrl:['']
    });

  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      const newBook = this.bookForm.value;
      newBook.publishedDate = new Date(newBook.publishedDate).toISOString().split('T')[0];
      this.store.dispatch(BookActions.addBook({ book: newBook }));
      this.router.navigate(['/']);
      this.notificationService.showSuccess('Book added successfully');
    }
  }
 
}
