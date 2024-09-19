import { Component } from '@angular/core';
import { WorkItemComponent } from '../components/work-item/work-item.component';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [
    WorkItemComponent
  ],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})
export class WorksComponent {

}
