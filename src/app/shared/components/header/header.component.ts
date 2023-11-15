import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isAddBook:boolean = false;
  constructor(private readonly router: Router) {

  }

  addBook(){
    this.router.navigate(['/add-book']);
    this.isAddBook = true;
  }
  bookList(){
    this.router.navigate(['/']);
    this.isAddBook = false;
  }
}
