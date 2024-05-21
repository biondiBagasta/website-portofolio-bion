import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeSignalService {

  constructor() { }

  isDarkTheme$ = signal(true);

  changeTheme(): void {
    this.isDarkTheme$.set(!this.isDarkTheme$());
  }
}
