import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaceComponent } from './race.component';
import { RaceRoutingModule } from './race-routing.module';
import { RaceListComponent } from './race-list/race-list.component';
import { RaceResultsComponent } from './race-results/race-results.component';
import { HttpService } from '../services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    RaceRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  declarations: [
    RaceComponent,
    RaceListComponent,
    RaceResultsComponent
  ],
  providers: [
    HttpService
  ]
})
export class RaceModule { }

