import { Circuit } from "./circuit";
import { Winner } from "./winner";

export class Race {
    season: number;
    round: number;
    url: string;
    raceName: string;
    Circuit: Circuit;
    date:string;
    time:string;
    winners:Winner[]
}