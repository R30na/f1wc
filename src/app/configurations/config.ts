export class Config {
    private static seasonListUrl = 'http://ergast.com/api/f1/seasons?limit=11&offset=55';
    private static raceBaseUrl = 'http://ergast.com/api/f1/';


    public static getSeasonListUrl() {
        return this.seasonListUrl;
    }

    public static getRaceBaseUrl() {
        return this.raceBaseUrl;
    }
}