import { Component, EventEmitter, Output } from '@angular/core';
import { Service } from 'src/app/interfaces/service';
import { Destination } from 'src/app/models/destination.model';
import { DestinationService } from 'src/app/services/destination.service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-search-and-book',
  templateUrl: './search-and-book.component.html',
  styleUrls: ['./search-and-book.component.scss']
})
export class SearchAndBookComponent {

  constructor(private serviceService: ServiceService, private destinationService: DestinationService){}

  services: Service[] = [];
  arrayOfDestinations: Destination[] = [];

  searchEnteredDestination: string = '';

  @Output() destination = new EventEmitter<string>();

  ngOnInit(){
    this.services=this.serviceService.services;
    this.arrayOfDestinations = this.destinationService.arrayOfDestinations;
  }

  onSearchEnteredDestination(destinationName: string){
    this.searchEnteredDestination = destinationName;
  }

  onSendTheDestination(destinationName: string){
    this.destination.emit(destinationName);
  }


}
