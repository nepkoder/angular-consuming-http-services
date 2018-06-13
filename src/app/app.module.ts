import { PersonService } from './services/person.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';
import { PersonComponent } from './person/person.component';
import { PersonNewComponent } from './person-new/person-new.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
