import {Injectable} from '@angular/core';
import {Observable, Observer} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Ng8ConnectionService {

  private observable: Observable<boolean>;

  constructor(private http: HttpClient) {

  }

  monitor(): Observable<boolean> {
    if (this.observable) {
      return this.observable;
    }

    return this.observable = new Observable((observer: Observer<boolean>) => {

      const callObserver = () => {
        observer.next(window.navigator.onLine);
      };

      callObserver();

      if ('navigator' in window && 'connection' in window.navigator) {
        (window.navigator as any).connection.addEventListener('change', (ev) => callObserver());
      }

      window.addEventListener('online', callObserver);
      window.addEventListener('offline', callObserver);
    });
  }

}
