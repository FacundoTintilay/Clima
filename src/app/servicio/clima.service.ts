import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  key="49658e4ac21ff4982f82e6359a591383";

  constructor(private http: HttpClient) { }

  clima(ciudad:string):Observable<any>{
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&mode=json&units=metric&appid=${this.key}`);
  }

}