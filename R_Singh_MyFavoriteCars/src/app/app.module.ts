import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentListPipe } from './content-list/content-list.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentDetailComponent } from './content-detail/content-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    ContentListPipe,
    HoverAffectDirective,
    ContentDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})

export class AppModule { }
