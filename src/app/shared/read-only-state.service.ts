import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ReadOnlyStateService {
  private _readOnly$: BehaviorSubject<Boolean> = new BehaviorSubject(true);
  readOnly$: Observable<Boolean> = this._readOnly$.asObservable();

  constructor() {}

  toggle(): void {
    this._readOnly$.next(!this._readOnly$.value);
  }
}
