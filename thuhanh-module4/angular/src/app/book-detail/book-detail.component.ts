import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from '../books.service';
import { BooksListComponent } from '../books-list/books-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Books } from '../books';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  id!: number;
  book!: Books;
  constructor(private route: ActivatedRoute,private router: Router,
              private BookService: BooksService) { }

  ngOnInit(): void {
    this.book = new Books();
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.BookService.getBookById(this.id).subscribe(data => {
      console.log(data)
      this.book = data;
    }, error => console.log(error));
  }

  list(){
    this.router.navigate(['books']);

  }

}
