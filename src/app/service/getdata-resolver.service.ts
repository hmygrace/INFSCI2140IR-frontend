import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Job } from '../models/job';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root'
})
export class GetdataResolverService implements Resolve<Job[]> {

  constructor(
    private searchService: SearchService, private router: Router
    ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Job[]>{
    var query = route.data['query'];
    var company = route.data['company'];
    return this.searchService.search(query,company);
  }
}