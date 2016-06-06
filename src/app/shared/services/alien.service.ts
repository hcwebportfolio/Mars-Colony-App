import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { IAlien } from '../models';

@Injectable()
export class AlienService {
  
  alienUrl = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';
  
  constructor(private http: Http) {}
  
  getAliens(): Promise<IAlien[]> {
    return this.http.get(this.alienUrl)
             .toPromise()
             .then( response => response.json().aliens )
             .catch( this.handleError );
  }
  
  private handleError(error: any) {
    console.log('There was an error', error);
    return Promise.reject(error.message || error);
  }
}

