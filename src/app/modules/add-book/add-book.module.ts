import { NgModule } from '@angular/core';
import { AddBookRoutingModule } from './add-book-routing.module';
import { StartPageComponent } from './start-page/start-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [
    StartPageComponent
  ],
  imports: [
    AddBookRoutingModule,
    SharedModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-CA' }

  ]
})
export class AddBookModule { }
