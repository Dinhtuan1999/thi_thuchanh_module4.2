import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Books } from '../books';
import { BooksService } from '../books.service';
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  id!: number;
  book!: Books;
  submitted = false;

  constructor(
    private route: ActivatedRoute, private router: Router,
    private BooksService: BooksService
  ) { }

  ngOnInit(): void {
    this.book = new Books();

    this.id = this.route.snapshot.params['id'];


    this.BooksService.getBookById(this.id)
      .subscribe(data => {
        console.log(data)
        this.book = data;
      }, error => console.log(error));
  }

  editBook() {
    this.BooksService.editBook(this.id, this.book)
      .subscribe(data => {
        console.log(data);
        this.book = new Books();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.editBook();
  }

  gotoList() {
    this.router.navigate(['books']);
  }

}
