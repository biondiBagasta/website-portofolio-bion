import { Component, ChangeDetectionStrategy, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { PersonalInfoComponent } from "./components/personal-info/personal-info.component";
import { TopMenuComponent } from "./components/top-menu/top-menu.component";
import { ThemeSignalService } from './signals/theme-signal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    PersonalInfoComponent,
    TopMenuComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(private themeSignalService: ThemeSignalService) {}

  isDarkTheme$ = computed(() => this.themeSignalService.isDarkTheme$());

  darkBackgroundUrl = `url(assets/img/bg/page-bg-dark-1.jpg)`;
  lightBackgroundUrl = `url(assets/img/bg/page-bg-1.jpg)`;
}
