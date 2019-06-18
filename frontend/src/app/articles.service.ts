import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Article } from './Models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private uri: string = 'http://localhost:3000/api/algorithmservice'

  constructor(private http: HttpClient) {

  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.uri}/articles`)
      .pipe(
        tap(_ => console.log('fetched Articles')),
        catchError(this.handleError<Article[]>('getArticles', []))
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
