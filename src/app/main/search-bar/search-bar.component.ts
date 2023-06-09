import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  enteredDestination: string = '';

  @Output()
  searchDestination: EventEmitter<string> = new EventEmitter<string>();

  onSearchDestination(){
    this.searchDestination.emit(this.enteredDestination);
  }
}
