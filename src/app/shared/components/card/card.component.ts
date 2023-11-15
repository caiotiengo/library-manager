import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/core/models/book.model';
import { deleteBook } from 'src/app/core/services/store/book.actions';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input() book!: Book;
  @Output() deleteAction = new EventEmitter<number>();
  constructor() {
    
  }
  delete(id:number){
    this.deleteAction.emit(id);
  }
}
