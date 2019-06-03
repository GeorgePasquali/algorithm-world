import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Topic } from './Models/Topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) { }

  uri: string = 'http://localhost:8000'

  getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(`${this.uri}/api/topics`)
      .pipe(
        tap(_ => console.log('fetched topics')),
        catchError(this.handleError<Topic[]>('getHeroes', []))
      );
  }

  getTopicById(id: string) {
    return this.http.get(`${this.uri}/api/topics/${id}`);
  }

  addTopic(title, responsible, description, severity) {
    const topic = {
      title: title,
      description: description
    };
    return this.http.post(`${this.uri}/Topic/add`, topic);
  }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
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
