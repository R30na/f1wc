import { Driver } from './driver';
import { Constructor } from './constructor';
import { Time } from './time';

export class Winner {
    number: number;
    position: number;
    positionText: number;
    points: number;
    Driver: Driver;
    Constructor: Constructor;
    grid: number;
    laps: number;
    status: string;
    Time: Time;
}