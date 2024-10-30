import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private readonly API_URL = 'http://localhost:8080'

  constructor(private http: HttpClient) {
  }

  public create(document: Document): Observable<Document> {
    return this.http.post<Document>(`${this.API_URL}/documents/create`, document);
  }
}
