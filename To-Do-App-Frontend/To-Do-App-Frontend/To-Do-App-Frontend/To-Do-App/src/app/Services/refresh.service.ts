
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {

  private refreshSubject = new Subject<void>();
    
 // private refreshSubject = new BehaviorSubject<boolean>(false);

  setRefresh() {
    // this.refreshSubject.next(true);
    this.refreshSubject.next();
  }

  getRefresh() {
    return this.refreshSubject.asObservable();
  }
}
