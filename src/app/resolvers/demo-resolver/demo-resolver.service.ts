import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FakeApiService } from 'src/app/services/api/fake-api.service';
import { mergeMap, map } from 'rxjs/internal/operators';
import { Book } from 'src/app/services/api/books.model';
import { Writer } from 'src/app/services/api/writer.model';
import { FakeLoaderService } from 'src/app/services/loader/fake-loader.service';

@Injectable({
  providedIn: 'root'
})
export class DemoResolverService implements Resolve<any> {

  constructor(private apiService: FakeApiService, private loadingService: FakeLoaderService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.loadingService.loading = true;

    const resolverData = this.apiService.getBookByTitle(route.queryParams.bookTitle)
      .pipe(
        mergeMap((book: Book) => {
          console.log('book', book);
          return this.apiService.getWriterOfBook(book.id);
        }),
        mergeMap( (writer: Writer) => {
          console.log('writer', writer);
          return this.apiService.getAllBookOfWritter(writer.id);
        }),
        map( (books: Book[]) => { //mapul asta nu e necesar, e pus doar pentru console log
          console.log('books of writer', books);
          this.loadingService.loading = false;
          return books;
        })
      );
    return resolverData;
  }
}
