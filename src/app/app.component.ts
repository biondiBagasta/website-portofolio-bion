import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { PersonalInfoComponent } from "./components/personal-info/personal-info.component";
import { TopMenuComponent } from "./components/top-menu/top-menu.component";

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
  title = 'my-portofolio-website';
}
