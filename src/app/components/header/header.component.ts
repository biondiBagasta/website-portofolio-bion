import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, Inject, OnInit, Renderer2, signal } from '@angular/core';
import { ThemeSignalService } from '../../signals/theme-signal.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {


  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2,
  private themeSignalService: ThemeSignalService) {}

  isDarkMode$ = computed(() => this.themeSignalService.isDarkTheme$());

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'dark-theme');
  }

  changeTheme(): void {
    if(this.isDarkMode$() == true) {
      this.renderer.removeClass(this.document.body, 'dark-theme');
      this.themeSignalService.changeTheme();
    } else {
      this.renderer.addClass(this.document.body, 'dark-theme');
      this.themeSignalService.changeTheme();
    }
  }
}
