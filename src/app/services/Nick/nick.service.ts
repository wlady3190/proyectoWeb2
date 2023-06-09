import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NickService {
  constructor(private http: HttpClient) {}
  private API_NICK = 'http://0.0.0.0:3000/personal';

  getNick(): Observable<any> {
    return this.http.get(this.API_NICK);
  }
}
