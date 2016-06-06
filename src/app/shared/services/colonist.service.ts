import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Colonist } from '../models';

@Injectable()
export class ColonistService {
  
  colonistUrl = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';
  
  constructor(private http: Http) {}
  
  createColonist(colonist: Colonist): Promise<Colonist> {
      
      let headers : Headers  = new Headers({ 'Content-Type': 'application/json' });
      let body : string = JSON.stringify({ colonist });
      
      return this.http.post(this.colonistUrl, body, { headers })
                       .toPromise()
                       .then( response => response.json().colonist )
                       .catch( this.handleError ); 
  }
  
  private handleError(error: any) {
    console.log('There was an error', error);
    return Promise.reject(error.message || error);
  }
}


