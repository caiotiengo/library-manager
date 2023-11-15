import { NgModule } from '@angular/core';
import { StartPageComponent } from './start-page/start-page.component';
import { BookListRoutingModule } from './book-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    StartPageComponent
  ],
  imports: [
    SharedModule,
    BookListRoutingModule
  ],
  providers: []
})
export class BookListModule { }
