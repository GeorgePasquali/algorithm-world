import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Trait } from './Models/Trait';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TraitsService {

  private uri: string = 'http://localhost:8000'

  constructor(private http: HttpClient) {

  }

  getTrait(id: number): Observable<Trait[]> {
    return this.http.get<Trait[]>(`${this.uri}/api/traits/byid/${id}`)
      .pipe(
        tap(_ => console.log('fetched traits')),
        catchError(this.handleError<Trait[]>('getHeroes', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
