import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as BookActions from './book.actions';
import { BookServiceService } from '../book/book-service.service';

@Injectable()
export class BookEffects {
    constructor(private actions$: Actions, private bookApiService: BookServiceService) { }

    loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookActions.loadBooks),
      mergeMap(() =>
        this.bookApiService.getBooks().pipe(
          map((books) => BookActions.loadBooksSuccess({ books })),
          catchError(() => of(BookActions.loadBooksFailed()))
        )
      )
    )
  );

    addBook$ = createEffect(() =>
        this.actions$.pipe(
            ofType(BookActions.addBook),
            mergeMap(({ book }) =>
                this.bookApiService.addBook(book).pipe(
                    map(() => BookActions.addBookSuccess({ book })),
                    catchError(() => of(BookActions.addBookFailed()))
                )
            )
        )
    );

    deleteBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookActions.deleteBook),
      mergeMap(({ id }) =>
        this.bookApiService.deleteBook(id).pipe(
          map(() => BookActions.deleteBookSuccess({ id })),
          catchError(() => of(BookActions.deleteBookFailed()))
        )
      )
    )
  );

}
