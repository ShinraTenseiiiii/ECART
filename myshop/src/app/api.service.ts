import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {




  constructor(private http:HttpClient) { }

  selcat(){
    
    return this.http.get("https://server-hc6h.onrender.com/cat/sel");

  }

  selpro(){
    
    return this.http.get("https://server-hc6h.onrender.com/pro/sel");

  }
}
