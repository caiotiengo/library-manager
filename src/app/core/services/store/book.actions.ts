import { createAction, props } from '@ngrx/store';
import { Book } from '../../models/book.model';

// Action Types
export const loadBooks = createAction('[Book] Load Books');
export const loadBooksSuccess = createAction('[Book] Load Books Success', props<{ books: Book[] }>());
export const loadBooksFailed = createAction('[Book] Load Books Failed');

export const addBook = createAction('[Book] Add Book', props<{ book: Book }>());
export const addBookSuccess = createAction('[Book] Add Book Success', props<{ book: Book }>());
export const addBookFailed = createAction('[Book] Add Book Failed');

export const deleteBook = createAction('[Book] Delete Book', props<{ id: number }>());
export const deleteBookSuccess = createAction('[Book] Delete Book Success', props<{ id: number }>());
export const deleteBookFailed = createAction('[Book] Delete Book Failed');
