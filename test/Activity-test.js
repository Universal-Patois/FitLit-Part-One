import { expect } from 'chai';
import { sampleActivity } from '../src/sample-data';
import Activity from '../src/Activity'
import User from '../src/User';
import Hydration from '../src/Hydration';

describe('Activity', () => {

    let activity1;
    let activity2;
    let activity3;
    let activity4;
    let activity5;
    let activity6;
    let activity7;
    let activity8;
    let activity9;

    beforeEach(() => {
        activity1 = new Activity({
            "userID": 1,
            "date": "2019/06/15",
            "numSteps": 3577,
            "minutesActive": 140,
            "flightsOfStairs": 16
          });
        activity2 = new Activity({
            "userID": 2,
            "date": "2019/06/15",
            "numSteps": 4294,
            "minutesActive": 138,
            "flightsOfStairs": 10
          });
        activity3 = new Activity({
          "userID": 2,
          "date": "2019/06/16",
          "numSteps": 4112,
          "minutesActive": 220,
          "flightsOfStairs": 37
          });
        activity4 = new Activity({
            "userID": 2,
            "date": "2019/06/17",
            "numSteps": 13750,
            "minutesActive": 65,
            "flightsOfStairs": 4
          });
        activity5 = new Activity({
            "userID": 2,
            "date": "2019/06/18",
            "numSteps": 4662,
            "minutesActive": 181,
            "flightsOfStairs": 31
          });
        activity6 = new Activity({
            "userID": 2,
            "date": "2019/06/19",
            "numSteps": 9858,
            "minutesActive": 243,
            "flightsOfStairs": 44
          });
        activity7 = new Activity({
            "userID": 2,
            "date": "2019/06/20",
            "numSteps": 8153,
            "minutesActive": 74,
            "flightsOfStairs": 10
          });
        activity8 = new Activity({
            "userID": 2,
            "date": "2019/06/21",
            "numSteps": 10225,
            "minutesActive": 174,
            "flightsOfStairs": 26
          });
        activity9 = new Activity({
            "userID": 2,
            "date": "2019/06/22",
            "numSteps": 3605,
            "minutesActive": 124,
            "flightsOfStairs": 31
          });
    })

    it('should be an instance of Activity', () => {
        expect(activity1).to.be.an.instanceOf(Activity);
        expect(activity7).to.be.an.instanceOf(Activity);
    })



})