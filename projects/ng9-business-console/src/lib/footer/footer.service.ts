import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  constructor() {}

  add(...params: number[]): number {
    let result = 0;
    for (const val of params) {
      result += val;
    }
    return result;
  }
}
