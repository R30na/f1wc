import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaceListComponent } from './race-list/race-list.component';
import { RaceResultsComponent } from './race-results/race-results.component';
import { RaceComponent } from './race.component';

const routes: Routes = [
  {
    path: '', component: RaceComponent, children: [
      { path: '', component: RaceListComponent },
      { path: 'lists', component: RaceListComponent },
      { path: 'results/:season', component: RaceResultsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RaceRoutingModule { }
