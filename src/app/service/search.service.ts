import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
// import "rxjs/Rx";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Job } from '../models/job';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }
  //search
  search(query: string, company:string): Observable<Job[]>{
    return this.http.get<Job[]>(environment.apiUrl+"/jobs/search?query="+query+"&company="+company);
  }
}
