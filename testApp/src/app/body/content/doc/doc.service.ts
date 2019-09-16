import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocService {
  constructor(private http: HttpClient) {
  }

  public getJSON( json:String): Observable<any> {
    return this.http.get(`./assets/${json}`);
  }  
}
