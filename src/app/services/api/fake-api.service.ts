import { Injectable } from '@angular/core';
import  books from './books.mock';
import writers from './writers.mock';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import { Book } from './books.model';
import { Writer } from './writer.model';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  constructor() { }

  /**
   * Retrieves a single book with the specified title
   * @param title Title of the book
   */
  getBookByTitle(title: string = ''): Observable<Book>{
    
    const res = books.find( book => book.title.toUpperCase() === title.toUpperCase())
    return of(res).pipe(delay(3000));
  }

  /**
   * Retrieves a single writer for the specified book id
   * @param bookId Book id
   */
  getWriterOfBook(bookId: number): Observable<Writer>{
    const book = books.find( book => book.id === bookId);
    const writer = writers.find( writer => writer.name.toUpperCase() === book.writer);

    return of(writer).pipe(delay(2000));
  }

  /**
   * Retrieves an array of books for the writer
   * @param writerId Writer id
   */
  getAllBookOfWritter(writerId: number): Observable<Book[]>{
    const writer = writers.find( writer => writer.id === writerId);
    const writerBooks = books.filter( book => book.writer.toUpperCase() === writer.name.toUpperCase());

    return of(writerBooks).pipe(delay(1000));
  }
}
