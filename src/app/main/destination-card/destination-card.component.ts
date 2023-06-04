import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Destination } from 'src/app/models/destination.model';

@Component({
  selector: 'app-destination-card',
  templateUrl: './destination-card.component.html',
  styleUrls: ['./destination-card.component.scss']
})
export class DestinationCardComponent {
  @Input() destination!: Destination;

  @Output()
  sendDestination: EventEmitter<string> = new EventEmitter<string>();

  onClick(){
    this.sendDestination.emit(this.destination.name);
  }
  
}
