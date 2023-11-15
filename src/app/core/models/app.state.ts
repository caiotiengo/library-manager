import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Book } from "./book.model";

export interface AppState {
  books: Book[];
}

export const initialState: AppState = {
  books: [],
};

export const selectBooksState = createFeatureSelector<AppState>('books');
export const selectBooks = createSelector(selectBooksState, (state) => state.books);