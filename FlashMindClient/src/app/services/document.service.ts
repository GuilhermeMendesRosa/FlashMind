import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Document} from "../models/Document";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private readonly API_URL = 'https://flashmind-production.up.railway.app'

  constructor(private http: HttpClient) {
  }

  public create(title: string): Observable<Document> {
    let document = {title: title};
    return this.http.post<Document>(`${this.API_URL}/documents/create`, document);
  }

  public update(document: Document): Observable<Document> {
    return this.http.put<Document>(`${this.API_URL}/documents/${document.id}`, document);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/documents/${id}`);
  }

  public findAll(): Observable<Document[]> {
    return this.http.get<Document[]>(`${this.API_URL}/documents`);
  }

  public findById(id: number): Observable<Document> {
    return this.http.get<Document>(`${this.API_URL}/documents/${id}`);
  }

}
