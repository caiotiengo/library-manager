import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/book-list/book-list.module').then((m) => m.BookListModule),
  },
  {
    path: 'add-book',
    loadChildren: () => import('./modules/add-book/add-book.module').then((m) => m.AddBookModule),
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
