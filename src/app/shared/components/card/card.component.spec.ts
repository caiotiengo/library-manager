import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { SharedModule } from '../../shared.module';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
    imports: [SharedModule],
    });

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display card with attributes', () => {
    const title = 'Book 1';
    const author = 'Author 1';
    const publishedDate = new Date('2022-01-01').toISOString().split('T')[0];

    component.book.title = title;
    component.book.author = author;
    component.book.publishedDate = publishedDate;

    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain(title);
    expect(compiled.textContent).toContain(author);
    expect(compiled.textContent).toContain(publishedDate);
  });
});
