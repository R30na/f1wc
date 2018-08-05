import { RaceModule } from './race.module';

describe('RaceModule', () => {
  let raceModule: RaceModule;

  beforeEach(() => {
    raceModule = new RaceModule();
  });

  it('should create an instance', () => {
    expect(raceModule).toBeTruthy();
  });
});
