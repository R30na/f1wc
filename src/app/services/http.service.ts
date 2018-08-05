import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../configurations/config';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public baseUrl:string = Config.getRaceBaseUrl();

  constructor(private http:HttpClient) { 

  }

  httpGet(url: any){
    return this.http.get(this.baseUrl+url);
  }


}
