import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentListPipe } from './content-list/content-list.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    ContentListPipe,
    HoverAffectDirective,
    ModifyContentComponentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})

export class AppModule { }
