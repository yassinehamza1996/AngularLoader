import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  loading : boolean = false
  private isLoading$ = new BehaviorSubject(false)
  
  getLoadingStatus(){
    return this.isLoading$
  }

  setLoadingStatus(state : boolean){
    this.loading = state;
    this.isLoading$.next(this.loading)
  }

  clearLoadingStatus(){
    this.isLoading$.next(false)
    this.loading = false
  }
}
