import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostSingleComponent } from './post-single/post-single.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
  {path: 'post', component: PostComponent},
  {path: 'post/:id', component: PostSingleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
