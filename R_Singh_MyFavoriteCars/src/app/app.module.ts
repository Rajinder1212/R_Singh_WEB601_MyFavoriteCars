import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentListPipe } from './content-list/content-list.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from
"@angular/common/http";
import { HttpClientInMemoryWebApiModule } from
"angular-in-memory-web-api";
import { InMemoryDataService } from "./services/inmemory-data.service";
@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    ContentListPipe,
    HoverAffectDirective,
    MessagesComponent,
    HttpClientModule,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})

export class AppModule { }
