import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-info',
  templateUrl: './service-info.component.html',
  styleUrls: ['./service-info.component.scss']
})
export class ServiceInfoComponent {
  @Input() name: string | undefined;
  @Input() articleTitle: string | undefined;
  @Input() about: string | undefined;
}
