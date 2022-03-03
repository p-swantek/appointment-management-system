import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  accountExistsForEmail(email: string): Observable<boolean>{
    return of(true);
  }


}
