import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http: HttpClient) { }

  // return all page service
  getAllPages(){
    return this.http.get(`${environment.apiUrl}/pages`).pipe(map(res => res));
  }

  // get single page
  getPage(pageId){
    return this.http.get(`${environment.apiUrl}/pages/${pageId}`).pipe(map(res => res));
  }

}
