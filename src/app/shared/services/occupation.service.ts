import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { IOccupation } from '../models';

@Injectable()
export class OccupationService {
  
  occupationUrl = 'https://red-wdp-api.herokuapp.com/api/mars/jobs';
  
  constructor(private http: Http) {}
  
  
  getJobs(): Promise<IOccupation[]> {
    return this.http.get(this.occupationUrl)
             .toPromise()
             .then( response => response.json().jobs )
             .catch( this.handleError );
  }
  
  private handleError(error: any) {
    console.log('There was an error', error);
    return Promise.reject(error.message || error);
  }
}



/* 
  This is what we will write inside the component
  OccupationService.getJos()
                   .then(()=>{
                     this.jobs = jobs;
                   })
                   .catch(()=>{});

*/
