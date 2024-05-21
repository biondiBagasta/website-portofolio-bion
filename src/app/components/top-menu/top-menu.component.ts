import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopMenuComponent {

}
