import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title: string = 'New Adventure';
  discoverNowButtonClicked: boolean = false;

  discoverNowButton() {
    this.discoverNowButtonClicked = true;
  }

  onTitleChanged(destinationName: string){
    this.title = destinationName;
  }
}
