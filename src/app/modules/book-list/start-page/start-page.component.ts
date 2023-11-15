import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../core/models/app.state';
import { Observable } from 'rxjs';
import { Book } from 'src/app/core/models/book.model';
import * as BookActions from '../../../core/services/store/book.actions';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {
  searchText = '';
  books$: Observable<Book[]>;
  constructor(private store: Store,
    private notificationService: NotificationService) {
    this.books$ = this.store.select(fromRoot.selectBooks);
  }
  ngOnInit(): void {
    this.store.dispatch(BookActions.loadBooks());
  }
  deleteBook(id:number): void {
    this.store.dispatch(BookActions.deleteBook({ id }));
    this.notificationService.showSuccess('Book deleted successfully');

  }
}
