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
        let userActivityInfo = activityArray.filter((user) => user.userID === id)
        if (userActivityInfo.length === 0) {
            return "Invalid user ID. Please verify user ID and try again."
        }
        return userActivityInfo
    }

    exceededGoal(activityArray, id, user) {
        let currentUserActivity = this.getActivityByID(activityArray, id)
        let dayArray = [];
        currentUserActivity.filter(activity => {
            if (activity.numSteps > user.dailyStepGoal) {
                dayArray.push(activity.date)
            }
            return dayArray
        })
        if (dayArray.length === 0) {
            return 'There are no dates that match'
        }
        return dayArray
    }

    getLatestActiveMinutes(activityArray, id) {
        let currentUserActivity = this.getActivityByID(activityArray, id)
        currentUserActivity.sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime()
        })
        return currentUserActivity[0].minutesActive
    }

    allTimeStairClimbingRecord(activityArray, id) {
        let currentUserActivity = this.getActivityByID(activityArray, id)
        const mostStairs = currentUserActivity.map(activity => {
            return activity.flightsOfStairs
        }).sort((a, b) => {
            return b - a
        })
        return mostStairs[0]
    }

    averageMinutesActiveWeek(activityArray, id, dates) {
        let givenWeek = dates
        let currentUserActivity = this.getActivityByID(activityArray, id)
        const totalMinutesActive = currentUserActivity.reduce((acc, day) => {
            givenWeek.forEach(dayy => {
                if (day.date === dayy) {
                    acc += day.minutesActive
                }
            })
            return acc
        }, 0)
        return parseInt(totalMinutesActive / 7)
    }

    minutesActiveByDay(activityArray, id, date) {
        let currentUserActivity = this.getActivityByID(activityArray, id)
        let minutesActivePerDay = currentUserActivity.find((day) => {
            if (day.date === date) {
                return day.date
            } else {
                return 'No data for this day.'
            }
        })
        return minutesActivePerDay.minutesActive
    }

    milesWalkedByDay(activityArray, id, date, userID) {
        let currentUserActivity = this.getActivityByID(activityArray, id)
        const getDailySteps = currentUserActivity.find((day) => {
            if (day.date === date) {
                return day
            } else {
              return 'No data for this day.'
            }
        }).numSteps
        const getMiles = Number(((getDailySteps * userID.strideLength) / 5280).toFixed(1))
        return getMiles;
    }

    stepGoalAchieved(activityArray, id, date, userID) {
        let currentUserActivity = this.getActivityByID(activityArray, id)
        const getStepGoal = currentUserActivity.find((day) => {
            if (day.date === date) {
                return day
            } else {
                return 'No data for this day.'
            }
        }).numSteps
        console.log(getStepGoal, 'user: ', userID.dailyStepGoal)
            if (getStepGoal > userID.dailyStepGoal) {
                return 'Congratulations! You have exceeded your step goal!'
            } else if (getStepGoal === userID.dailyStepGoal) {
                return 'Congratulations! You have tied your step goal!'
            } else {
                return 'You didnt reach your step goal for today'
            }
    }
}



export default Activity;