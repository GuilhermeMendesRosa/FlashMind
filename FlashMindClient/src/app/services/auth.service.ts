import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from "../models/User";
import {Authentication} from "../models/Authentication";
import {PoPageLogin} from "@po-ui/ng-templates";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'http://localhost:8080'

  constructor(private http: HttpClient) {
  }

  public login(user: User): Observable<Authentication> {
    return this.http.post<Authentication>(`${this.API_URL}/auth/login`, user);
  }

  public signup(formData: PoPageLogin) {
    return this.http.post<Authentication>(`${this.API_URL}/auth/signup`, formData);
  }
}
