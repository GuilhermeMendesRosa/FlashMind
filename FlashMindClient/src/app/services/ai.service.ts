import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FlashCard} from "../models/FlashCard";
import {Document} from "../models/Document";

@Injectable({
  providedIn: 'root'
})
export class AiService {
  private readonly API_URL = 'http://localhost:8080'

  private _flashCards: FlashCard[] = [];

  constructor(private http: HttpClient) {
  }

  public generateFlashCards(document: Document): Observable<FlashCard[]> {
    return this.http.post<FlashCard[]>(`${this.API_URL}/ai/generate`, document);
  }

  get flashCards(): FlashCard[] {
    let flashCards = this._flashCards;
    return flashCards;
  }

  set flashCards(value: FlashCard[]) {
    this._flashCards = value;
  }


}
