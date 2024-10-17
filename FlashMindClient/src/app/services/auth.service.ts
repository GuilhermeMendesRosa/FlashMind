import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from "../models/User";
import {Token} from "../models/Token";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'http://localhost:8080'

  constructor(private http: HttpClient) {
  }

  public login(user: User): Observable<Token> {
    return this.http.post<Token>(`${this.API_URL}/auth/login`, user);
  }
}
