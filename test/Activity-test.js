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
    let activity10;
    let activityArray;
    let user1;
    let user2;

    beforeEach(() => {
        activity1 = new Activity({
            "userID": 1,
            "date": "2019/06/15",
            "numSteps": 3577,
            "minutesActive": 140,
            "flightsOfStairs": 16
          });
          activity10 = new Activity ({
            "userID": 1,
            "date": "2019/06/19",
            "numSteps": 11858,
            "minutesActive": 143,
            "flightsOfStairs": 54
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

          activityArray = [activity1, activity2, activity3, activity4, activity5, activity6, activity7, activity8, activity9, activity10];

          user1 = new User({
          "id": 1,
          "name": "Luisa Hane",
          "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
          "email": "Diana.Hayes1@hotmail.com",
          "strideLength": 4.3,
          "dailyStepGoal": 10000,
          "friends": [16, 4, 8]
          });
          
          user2 = new User({
            "id": 2,
            "name": "Jarvis Considine",
            "address": "30086 Kathryn Port, Ciceroland NE 07273",
            "email": "Dimitri.Bechtelar11@gmail.com",
            "strideLength": 4.5,
            "dailyStepGoal": 5000,
            "friends": [9, 18, 24, 19]  
          })
    })

    it('should be an instance of Activity', () => {
        expect(activity1).to.be.an.instanceOf(Activity);
        expect(activity7).to.be.an.instanceOf(Activity);
    })

    it('should have a userID', () => {
        expect(activity1.userID).to.equal(1);
        expect(activity2.userID).to.equal(2);
    })

    it('should have a date', () => {
        expect(activity1.date).to.equal("2019/06/15");
        expect(activity4.date).to.equal("2019/06/17");
    })

    it('should have a number of steps', () => {
        expect(activity1.numSteps).to.equal(3577);
        expect(activity6.numSteps).to.equal(9858);
    })

    it('should have a number of minutes active', () => {
        expect(activity1.minutesActive).to.equal(140);
        expect(activity9.minutesActive).to.equal(124);
    })

    it('should have a number of climbed flights of stairs', () => {
        expect(activity1.flightsOfStairs).to.equal(16);
        expect(activity5.flightsOfStairs).to.equal(31);
    })

    it('should be able to return a user by ID', () => {
        expect(activity1.getActivityByID(activityArray, 1)).to.deep.equal(
        [{
            "userID": 1,
            "date": "2019/06/15",
            "numSteps": 3577,
            "minutesActive": 140,
            "flightsOfStairs": 16
        },
        {
          "userID": 1,
          "date": "2019/06/19",
          "numSteps": 11858,
          "minutesActive": 143,
          "flightsOfStairs": 54
        }]);
        
          expect(activity2.getActivityByID(activityArray, 2)).to.deep.equal(
            [{
            "userID": 2,
            "date": "2019/06/15",
            "numSteps": 4294,
            "minutesActive": 138,
            "flightsOfStairs": 10
          },
          {
          "userID": 2,
          "date": "2019/06/16",
          "numSteps": 4112,
          "minutesActive": 220,
          "flightsOfStairs": 37
          },
          {
            "userID": 2,
            "date": "2019/06/17",
            "numSteps": 13750,
            "minutesActive": 65,
            "flightsOfStairs": 4
          },
          {
            "userID": 2,
            "date": "2019/06/18",
            "numSteps": 4662,
            "minutesActive": 181,
            "flightsOfStairs": 31
          },
          {
            "userID": 2,
            "date": "2019/06/19",
            "numSteps": 9858,
            "minutesActive": 243,
            "flightsOfStairs": 44
          },
          {
            "userID": 2,
            "date": "2019/06/20",
            "numSteps": 8153,
            "minutesActive": 74,
            "flightsOfStairs": 10
          },
          {
            "userID": 2,
            "date": "2019/06/21",
            "numSteps": 10225,
            "minutesActive": 174,
            "flightsOfStairs": 26
          },
          {
            "userID": 2,
            "date": "2019/06/22",
            "numSteps": 3605,
            "minutesActive": 124,
            "flightsOfStairs": 31
          }])
        
    })

    it('should return an array of dates the user exceeded their step goal', () => {
        expect(activity1.exceededGoal(activityArray, 1, user1)).to.deep.equal(['2019/06/19']);
        expect(activity2.exceededGoal(activityArray, 2, user2)).to.deep.equal(['2019/06/17', '2019/06/19', '2019/06/20', '2019/06/21'])
    })

    it('should return the latest number of active minutes for the user', () => {
      expect(activity1.getLatestActiveMinutes(activityArray, 1)).to.equal(143)
      expect(activity2.getLatestActiveMinutes(activityArray, 2)).to.equal(124)
    })


    it('should return the latest number of steps for the user', () => {
      expect(activity1.stepsWalkedByDay(activityArray, 1)).to.equal(11858)
      expect(activity2.stepsWalkedByDay(activityArray, 2)).to.equal(3605)
    })

    it('should return the users highest stair climbing record', () => {
      expect(activity1.allTimeStairClimbingRecord(activityArray, 1)).to.equal(54)
      expect(activity2.allTimeStairClimbingRecord(activityArray, 2)).to.equal(44)
    })

    it('should return the average minutes the user was active for a given week', () => {
      expect(activity2.averageMinutesActiveWeek(activityArray, 2, ["2019/06/22", "2019/06/21", "2019/06/20", "2019/06/19", "2019/06/18", "2019/06/17", "2019/06/16"])).to.equal(154)
      expect(activity1.averageMinutesActiveWeek(activityArray, 1, ["2019/06/15"])).to.equal('There is not enough information to calculate your average minutes active. Please check your inputs and try again.')
    })

    it ('should return how many minutes the user was active on a specific date', () => {
      expect(activity1.minutesActiveByDay(activityArray, 1, "2019/06/15")).to.equal(140)
      expect(activity1.minutesActiveByDay(activityArray, 1, "2020/05/11")).to.equal('No information available. Please verify search information and try again.')
    })

    it ('should return the latest miles walked by user', () => {
      expect(activity1.latestMilesWalked(activityArray, 1, user1)).to.equal(9.7)
      expect(activity2.latestMilesWalked(activityArray, 2, user2)).to.equal(3.1)
    })

    it ('should return the miles walked for a given day by user', () => {
      expect(activity1.milesWalkedByDay(activityArray, 1, "2019/06/15", user1)).to.equal(2.9)
      expect(activity2.milesWalkedByDay(activityArray, 2, "2019/06/15", user2)).to.equal(3.7)
    })

    it('should tell the user if they achieved their step goal', () => {
      expect(activity1.stepGoalAchieved(activityArray, 1, "2019/06/15", user1)).to.equal('You didnt reach your step goal for today')
      expect(activity2.stepGoalAchieved(activityArray, 2, "2019/06/17", user2)).to.equal('Congratulations! You have exceeded your step goal!')
    })

    it('should return the average number of minutes active for all users for a given day', () => {
      expect(activity1.averageAllUsersDailyMinutes(activityArray, "2019/06/15")).to.equal(139)
      expect(activity10.averageAllUsersDailyMinutes(activityArray, "2019/06/19")).to.equal(193)
    })

    it('should return the average number of steps for all users for a given day', () => {
      expect(activity1.averageAllUsersDailySteps(activityArray, "2019/06/15")).to.equal(3935)
      expect(activity10.averageAllUsersDailySteps(activityArray, "2019/06/19")).to.equal(10858)
    })

    it('should return the average number of stairs climbed for all users for a given day', () => {
      expect(activity1.averageAllUsersDailyStairs(activityArray, "2019/06/15")).to.equal(13)
      expect(activity10.averageAllUsersDailyStairs(activityArray, "2019/06/19")).to.equal(49)
    })

    // it('should return the average number of stairs climbed, minutes active, and daily steps for all users for a given day', () => {
    //   expect(activity1.averageAllUsersActivities(activityArray, "2019/06/15")).to.equal(5634)
    // })
})