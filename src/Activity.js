import { sampleHydration } from "./sample-data";

class Activity {
  constructor(activityInfo) {
    this.userID = activityInfo.userID;
    this.date = activityInfo.date;
    this.numSteps = activityInfo.numSteps;
    this.minutesActive = activityInfo.minutesActive;
    this.flightsOfStairs = activityInfo.flightsOfStairs;
  }

  getActivityByID(activityArray, id) {
    return activityArray.filter((user) => user.userID === id)
  }

  exceededGoal(activityArray, id, user) {
    let currentUserActivity = this.getActivityByID(activityArray, id);
    let dayArray = [];
    currentUserActivity.filter((activity) => {
      if (activity.numSteps > user.dailyStepGoal) {
        dayArray.push(activity.date);
      }
      return dayArray;
    });
    if (dayArray.length === 0) {
      return "There are no dates where you exceeded your daily step goal";
    }
    return dayArray;
  }

  getLatestActiveMinutes(activityArray, id) {
    let currentUserActivity = this.getActivityByID(activityArray, id);
    currentUserActivity.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    return currentUserActivity[0].minutesActive;
  }

  allTimeStairClimbingRecord(activityArray, id) {
    let currentUserActivity = this.getActivityByID(activityArray, id);
    const mostStairs = currentUserActivity
      .map((activity) => {
        return activity.flightsOfStairs;
      })
      .sort((a, b) => {
        return b - a;
      });
    return mostStairs[0];
  }

  averageMinutesActiveWeek(activityArray, id, dates) {
    let givenWeek = dates;
    let currentUserActivity = this.getActivityByID(activityArray, id);
    if (currentUserActivity.length < 7) {
        return 'There is not enough information to calculate your average minutes active. Please check your inputs and try again.'
    }
    const totalMinutesActive = currentUserActivity.reduce((acc, day) => {
      givenWeek.forEach((dayy) => {
        if (day.date === dayy) {
          acc += day.minutesActive;
        }
      });
      return acc;
    }, 0);
    return parseInt(totalMinutesActive / 7);
  }


  minutesActiveByDay(activityArray, id, date) {
    let currentUserActivity = this.getActivityByID(activityArray, id)
    if (currentUserActivity.length === 0) {
        return "No information available. Please verify search information and try again."
    }
    let minutesActivePerDay = currentUserActivity.find((activity) => activity.date === date )
    if (!minutesActivePerDay) {
        return 'No information available. Please verify search information and try again.'
    }
    return minutesActivePerDay.minutesActive
  }
  

  milesWalkedByDay(activityArray, id, date, userID) {
    let currentUserActivity = this.getActivityByID(activityArray, id);
    const getDailySteps = currentUserActivity.find((day) => {
      if (day.date === date) {
        return day;
      } else {
        return "No data for this day.";
      }
    }).numSteps;
    const getMiles = Number(
      ((getDailySteps * userID.strideLength) / 5280).toFixed(1)
    );
    return getMiles;
  }

  stepGoalAchieved(activityArray, id, date, userID) {
    let currentUserActivity = this.getActivityByID(activityArray, id);
    let getStepGoal = currentUserActivity.filter((day) => day.date === date).map(dateObj => dateObj.numSteps);
    if (getStepGoal > userID.dailyStepGoal) {
      return "Congratulations! You have exceeded your step goal!";
    } else if (getStepGoal === userID.dailyStepGoal) {
      return "Congratulations! You have tied your step goal!";
    } else {
      return "You didnt reach your step goal for today";
    }
  }

  averageAllUsersDailyMinutes(activityArray, date) {
    let userDate = activityArray.filter((activity) => activity.date === date);
    let allAverageMinutes =
      userDate.reduce((acc, activity) => {
        acc += activity.minutesActive;
        return acc;
      }, 0) / userDate.length;
    return allAverageMinutes;
  }

  averageAllUsersDailySteps(activityArray, date) {
    let userDate = activityArray.filter((activity) => activity.date === date);
		let allAverageSteps = userDate.reduce((acc, activity) => {
			acc += activity.numSteps
			return acc
		},0) / userDate.length
		return parseInt(allAverageSteps)
  }

	averageAllUsersDailyStairs(activityArray, date) {
		let userDate = activityArray.filter((activity) => activity.date === date);
		let allAverageStairs = userDate.reduce((acc, activity) => {
			acc += activity.flightsOfStairs
			return acc
		},0) / userDate.length
		return allAverageStairs
	}
	
	// averageAllUsersActivities(activityArray, date) {
	// 	this.averageAllUsersDailyMinutes(activityArray, date)
	// 	this.averageAllUsersDailySteps(activityArray, date)
	// 	this.averageAllUsersDailyStairs(activityArray, date)
	// }
}

export default Activity;
