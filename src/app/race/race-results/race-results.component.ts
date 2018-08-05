import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Race } from '../../model/race';


@Component({
  selector: 'app-race-results',
  templateUrl: './race-results.component.html',
  styleUrls: ['./race-results.component.css']
})
export class RaceResultsComponent implements OnInit {

  loading: boolean = false;
  season: number;
  faInfoCircle = faInfoCircle;
  faSpinner = faSpinner;
  raceList: Race[] = [];
  firstPositions: string[] = [];
  championList = [];

  constructor(private route: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe(res => {
      this.season = res.season;
    });
    this.getResults();
  }

  getResults() {
    this.httpService.httpGet(this.season + '.json').subscribe((res: any) => {
      this.raceList = res.MRData.RaceTable.Races;
      for (let i = 0; i < this.raceList.length; i++) {
        this.httpService.httpGet(this.season + '/' + this.raceList[i].round + '/results.json').subscribe((res2: any) => {
          let winners = res2.MRData.RaceTable.Races;

          this.firstPositions.push(winners[0].Results[0].Driver.driverId);
          for (let winner of winners) {
            this.raceList[i].winners = winner.Results;
          }
          // console.log(i);
          // console.log(this.raceList.length);
          if (i == this.raceList.length-1) {
            this.findChampions(this.firstPositions);
          }

        });
      }
      this.loading = false;


    });
  }


  findChampions(array) {
    // let array = this.firstPositions;
    let result = new Set();
    for (var i = 0; i < array.length; i++) {
      for (var j = i + 1; j < array.length; j++) {
        if (array[i] == array[j]) {
          result.add(array[i])
        }
      }
    }
    var myArr = Array.from(result);
    this.championList = myArr;
    // console.log(this.championList);

  }


}
