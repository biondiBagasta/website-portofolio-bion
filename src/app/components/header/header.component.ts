import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, HostListener, Inject, OnInit, Renderer2, signal } from '@angular/core';
import { ThemeSignalService } from '../../signals/theme-signal.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {


  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2,
  private themeSignalService: ThemeSignalService) {}

  isDarkMode$ = computed(() => this.themeSignalService.isDarkTheme$());

  isToggeledMobileMenu$ = signal(false);

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

  toggleMobileMenu(): void {
    this.isToggeledMobileMenu$.set(!this.isToggeledMobileMenu$());
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if(window.innerWidth > 600) {
      this.isToggeledMobileMenu$.set(false);
    }
  }
}
