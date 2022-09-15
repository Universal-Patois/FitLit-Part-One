

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

    averageMinutesActiveWeek(activityArray, id, date) {
        let givenWeek = [date]
        let totalMinutesActive = 0
        let currentUserActivity = this.getActivityByID(activityArray, id)
        const averageMinutes = currentUserActivity.reduce((acc, day) => {
            if (day.date === givenWeek.forEach(day)) {
                acc += day.minutesActive
            }
            console.log(acc)
            return acc
        },0)
        return averageMinutes
        
        // .forEach(day => {
            //     if (day.date === givenWeek.forEach(date)){
                //        return totalMinutesActive += day.minutesActive
                //     }
                // console.log(totalMinutesActive)
        // })
        // return averageMinutes
        
        // .sort((a, b) => a.date - b.date)
        // .splice(indexOf(givenWeek), 7)
        //change 0 to indexOf given week
      }
}



export default Activity;