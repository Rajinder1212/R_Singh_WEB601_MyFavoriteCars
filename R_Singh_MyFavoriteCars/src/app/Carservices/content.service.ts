import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { contentArray } from '../helper-files/contentDb';
import { Content } from '../helper-files/content-interface';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() {}
    getContent() : Observable<Content[]>{
      return of(contentArray)
    }
    getContentById(id: number): Observable<any> {
      const content = contentArray.find(c => c.id === id);
      return of(content);
    }
}
