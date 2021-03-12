import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Books } from '../books';
import { BooksService } from '../books.service';

@Component({

  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  constructor(private BookService: BooksService, private router: Router) { }
  book!: Observable<Books[]>;
  filter: any ;

  key = 'name'; // set default
  reverse = false;

  // initializing p to one
  p = 1;
  sort(key: any){
    this.key = key;
    this.reverse = !this.reverse;
  }


  ngOnInit(): void {
    this.reloadData();
  }

  // tslint:disable-next-line:typedef
  reloadData() {
    this.book = this.BookService.getBooklist();
  }


// tslint:disable-next-line:typedef
  deleteProduct(id: number){
    if (confirm('Bạn Có Chắc Chắn Muốn Xóa ' + id)){
      this.BookService.deleteBook(id).subscribe(
        data => {
          this.reloadData();
        }, error => console.log(error)
      );
    }
  }

  // tslint:disable-next-line:typedef
  bookDetail(id: number) {
    this.router.navigate(['details', id]);
  }
}
