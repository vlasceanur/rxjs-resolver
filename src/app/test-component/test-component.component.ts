import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../services/api/books.model';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  books: Book[] = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
   
    this.books = this.route.snapshot.data.allBooksForWriter;
  }

}
