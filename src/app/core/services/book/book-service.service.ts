import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book } from '../../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private apiUrl = 'http://localhost:3000/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  addBook(book: any): Observable<Book> {
    return this.http.post<any>(this.apiUrl, book);
  }

  deleteBook(id: number): Observable<Book> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
