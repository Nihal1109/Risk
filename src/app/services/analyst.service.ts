import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AnalystService {

  constructor( private _http: HttpClient) { }
  public analyst() {
    return this._http.get(`${baseUrl}/analyst`);
  }
}
