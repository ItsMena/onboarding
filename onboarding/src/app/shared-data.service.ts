import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private teamDataSubject = new BehaviorSubject<any>(null);
  teamData$ = this.teamDataSubject.asObservable();

  setTeamData(data: any) {
    this.teamDataSubject.next(data);
  }
}