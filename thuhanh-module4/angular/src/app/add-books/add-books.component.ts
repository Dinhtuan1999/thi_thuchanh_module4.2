import { BooksService } from '../books.service';
import { Books } from '../books';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';




@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  books: Books = new Books();
  submitted = false;
  validateForm: any = FormGroup;


  constructor(private BookService: BooksService,
              private router: Router,
              private fb: FormBuilder
  ) { }

  ngOnInit(): void {
   this.validateForm = this.fb.group({
  title: ['', [Validators.required, Validators.minLength(5)]],
  author: ['', [Validators.required, Validators.minLength(5)]],
  description: ['', [Validators.required, Validators.minLength(5)]],
});
this.books = new Books();
  }

  newBook(): void {
    this.submitted = false;
    this.books = new Books();
  }

  addBooks(){
    this.BookService.addBook(this.books).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['books']);
        this.books = new Books();
        alert("Chúc Mừng Bạn Đã Thêm Thành Công :))")
      },
      error => {
      console.error(error)
    }

    )
  }

  onSubmit() {
    console.log(this.validateForm)

  }

  gotoList() {
    this.router.navigate(['books']);
  }
}
