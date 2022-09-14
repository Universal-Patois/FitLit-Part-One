

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

}

export default Activity;