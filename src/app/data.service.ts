import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
url="http://mapps.cricbuzz.com/cbzios/match/livematches";
  constructor(private http:HttpClient) { }
  // http://mapps.cricbuzz.com/cbzios/match/livematches -->api
  getAPIdata():Promise<any>{
    return this.http.get(`${this.url}`).toPromise();
  }
}
