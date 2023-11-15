import { createReducer, on } from '@ngrx/store';
import * as BookActions from './book.actions';
import { initialState } from '../../models/app.state';

export const bookReducer = createReducer(
  initialState,
  on(BookActions.loadBooksSuccess, (state, { books }) => ({ ...state, books })),
  on(BookActions.loadBooksFailed, (state) => ({ ...state, books: [] })), 
  on(BookActions.addBookSuccess, (state, { book }) => ({ ...state, books: [...state.books, book] })),
  on(BookActions.addBookFailed, (state) => state), 
  on(BookActions.deleteBookSuccess, (state, { id }) => ({ ...state, books: state.books.filter((b) => b.id !== id) })),
  on(BookActions.deleteBookFailed, (state) => state)
);
