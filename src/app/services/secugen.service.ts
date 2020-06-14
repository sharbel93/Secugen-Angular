import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecugenService {
  getUri: any = 'https://localhost:8443/SGIFPCapture';

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/text',
    })
  };
  constructor(private http: HttpClient) { }


  postData(val: any): Observable<any> {
   return this.http.post<any>(this.getUri, val);
  }
}
