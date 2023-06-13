import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Crud } from '../Interface/CRUD.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiclientService {

  constructor(
    private _http: HttpClient
  ) { }
  getProducts():Observable<Array<Crud>> {
    return this._http.get<Array<Crud>>('http://localhost:5206/CRUD');
  }
}
