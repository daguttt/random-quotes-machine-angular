import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { getRandomElementFromArray } from 'src/app/shared/utils/getRandomElementFromAnArray';

@Injectable({
  providedIn: 'root',
})
export class ColorThemesService {
  _rgbColorThemes: string[] = [
    'rgb(153, 27, 82)',
    'rgb(33, 35, 13)',
    'rgb(36, 113, 180)',
    'rgb(168, 113, 190)',
    'rgb(162, 134, 108)',
    'rgb(73, 14, 206)',
    'rgb(172, 72, 24)',
    'rgb(0, 116, 89)',
    'rgb(90, 90, 87)',
    'rgb(235, 89, 101)',
    'rgb(42, 152, 211)',
    'rgb(133, 45, 109)',
    'rgb(15, 71, 28)',
    'rgb(56, 36, 10)',
    'rgb(35, 186, 92)',
    'rgb(171, 122, 124)',
    'rgb(64, 166, 154)',
  ];
  _randomColor = new BehaviorSubject<string>(
    getRandomElementFromArray(this._rgbColorThemes)
  );
  randomColor$ = this._randomColor.asObservable();

  constructor() {}

  getRandomRGBColor(): BehaviorSubject<string> {
    return this._randomColor;
  }

  emitNextRandomRGBColor(): void {
    const randomColor = getRandomElementFromArray(this._rgbColorThemes);
    this._randomColor.next(randomColor);
  }
}
