import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Season } from '../../model/season';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.css']
})
export class RaceListComponent implements OnInit {

  seasonList: Season[] = [];
  faInfoCircle = faInfoCircle
  faSpinner = faSpinner
  loading: boolean = false;

  constructor(private httpService: HttpService) {
    
  }

  ngOnInit() {
    this.loading = true;
    this.getSeasons();
  }

  getSeasons() {
    this.httpService.httpGet('seasons.json?limit=11&offset=55').subscribe((res: any) => {
      this.seasonList = res.MRData.SeasonTable.Seasons;
      this.loading = false;
      // console.log(res);
    })
  }

}
