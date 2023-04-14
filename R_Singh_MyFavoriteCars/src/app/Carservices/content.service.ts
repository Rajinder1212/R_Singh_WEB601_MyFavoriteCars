import { Injectable } from '@angular/core';
import { Content } from '../content';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
  
})

export class ContentService {
  id!: number;
  content!: Content;
  constructor(private route: ActivatedRoute,
    private contentService: ContentService) { }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':'application/json' })
    };

  getContent() : Observable<Content[]>{
    return this.http.get<Content[]>("api/content");
  }

  addContent(newContentItem: Content): Observable<Content>{
    return this.http.post<Content>("api/content", newContentItem, this.httpOptions);
  }

  updateContent(contentItem: Content): Observable<any>{
    return this.http.put("api/content", contentItem, this.httpOptions);
  }  
}
