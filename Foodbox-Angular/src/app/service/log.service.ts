import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  private logUserIdsource=new BehaviorSubject<String>('');
  loggeduserId$=this.logUserIdsource.asObservable();

  private showHeader=new BehaviorSubject<number>(1);
  headerId$=this.showHeader.asObservable();

  constructor() { }

  public sendId(loggedId :string){
    this.logUserIdsource.next(loggedId);
 }

 public sendHeader(isHeader:number){
   this.showHeader.next(isHeader);
 }
}
