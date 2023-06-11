import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiclientService {

  constructor(
    private _http: HttpClient
  ) { }
  getProducts():Observable<object[]> {
    return this._http.get<object[]>('http://localhost:5206/CRUD');
  }
}
