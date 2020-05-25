import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeLoaderService {
  private _loading: boolean = false;
  set loading(value) {
    this._loading = !!value;
    console.log('loading set', !!value);
  }
  get loading() {
    console.log('loading get', this._loading);
    return this._loading;
  }
  
  constructor() { }
}
