import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts(){
    return this.http.get(`${environment.apiUrl}/posts`).pipe(map(res => res));
  }

  getPost(postId){
    return this.http.get(`${environment.apiUrl}/posts/${postId}`).pipe(map(res => res));
  }
}
