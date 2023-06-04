import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SearchAndBookComponent } from './search-and-book/search-and-book.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ServiceInfoComponent } from './service-info/service-info.component';
import { MainRoutingModule } from './main-routing.module';
import { DestinationCardComponent } from './destination-card/destination-card.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HomeComponent,
    SearchAndBookComponent,
    SearchBarComponent,
    ServiceInfoComponent,
    DestinationCardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule
  ],
})
export class MainModule {}
