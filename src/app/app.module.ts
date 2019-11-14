import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListPostComponent } from './list-post/list-post.component';
import { AppareilComponent } from './appareil/appareil.component';
import { ListPostItemComponent } from './list-post-item/list-post-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPostComponent,
    AppareilComponent,
    ListPostItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
