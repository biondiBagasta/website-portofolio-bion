import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-item',
  standalone: true,
  imports: [

  ],
  templateUrl: './work-item.component.html',
  styleUrl: './work-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkItemComponent {

  @Input() url = "";
  @Input() title = "";
  @Input() imageUrl = "";
  @Input() technologies = "";

  goToUrl(): void {
    if(this.url.length != 0) {
      window.open(this.url, "_blank");
    }
  }
}
