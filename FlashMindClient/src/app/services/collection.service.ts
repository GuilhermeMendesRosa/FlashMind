import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Collection} from "../models/Collection";
import {FlashCard} from "../models/FlashCard";

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private readonly API_URL = 'https://flashmind-production.up.railway.app'

  constructor(private http: HttpClient) {
  }

  public create(title: string): Observable<Collection> {
    let collection = {title: title};
    return this.http.post<Collection>(`${this.API_URL}/collections`, collection);
  }

  public update(collection: Collection): Observable<Collection> {
    return this.http.put<Collection>(`${this.API_URL}/collections/${collection.id}`, collection);
  }

  public addFlashCards(id: Number, flashCards: FlashCard[]): Observable<Collection> {
    return this.http.patch<Collection>(`${this.API_URL}/collections/${id}`, flashCards);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/collections/${id}`);
  }

  public findAll(): Observable<Collection[]> {
    return this.http.get<Collection[]>(`${this.API_URL}/collections`);
  }

  public findById(id: number): Observable<Collection> {
    return this.http.get<Collection>(`${this.API_URL}/collections/${id}`);
  }


}
