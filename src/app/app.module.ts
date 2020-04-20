import { PostsService } from './services/posts.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { ListPostComponent } from './list-post/list-post.component';
import { AppareilComponent } from './appareil/appareil.component';
import { ListPostItemComponent } from './list-post-item/list-post-item.component';
import { NewPostComponentComponent } from './new-post-component/new-post-component.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'posts', component: ListPostComponent },
  { path: 'create/post', component: NewPostComponentComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' }
]

@NgModule({
  declarations: [
    AppComponent,
    ListPostComponent,
    AppareilComponent,
    ListPostItemComponent,
    NewPostComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
