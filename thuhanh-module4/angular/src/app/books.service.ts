import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private baseUrl = 'http://localhost:3000/books';


  constructor(private http: HttpClient) { }

  getBooklist(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  addBook(book: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, book);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getBookById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  editBook(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

}
