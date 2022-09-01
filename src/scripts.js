// This is the JavaScript entry file - your code begins here
// Query Selectors
let greeting = document.querySelector('.greeting');
let userInfo = document.querySelector('.user-info-container');
let friendsInfo = document.querySelector('.user-friends-container');
let stepGoalInfo = document.querySelector('.step-goal-container');
let hydrationInfo = document.querySelector('.hydration');
let sleepInfo = document.querySelector('.sleep');


// Object instances



// Event listeners
window.addEventListener('load', initializeData);
// Do not delete or rename this file ********

// console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file
import './css/styles.css';
import User from './User';
import UserRepository from './UserRepository';
import { sampleUsers } from './sample-data';
import { fetchAllData } from './apiCalls';

// let allUsers
// let newUser
// let userHydration
let userSleep


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

import userData from './data/users';
import Hydration from './Hydration';

// function getRandomUser() {
//   // if (userInfo[0]) {
//   // allUsers = new UserRepository(userInfo[0].userData)
//   // let randomUser = allUsers.userData[Math.floor(Math.random() * allUsers.userData.length)]
//   // newUser = new User(randomUser)
//   // userHydration = new Hydration(newUser)
//   // console.log("NEW USER", newUser)
//   // console.log("HYDRATION", userHydration)
//   // }
//   // console.log(userInfo)
//   renderAllInfo()
// }

function renderAllInfo() {
  renderUserInfo(newUser)
  renderHydrationData(userHydration)
}


function initializeData() {
  Promise.all([fetchAllData('users'), fetchAllData('sleep'), fetchAllData('hydration')]).then(
    (data) => {
      // getRandomUser(data);
      // getUserHydrationData(data)
      // console.log(data)
      let allUsers = data[0].userData.map(user => {
        let currentUser = new User(user)
        return currentUser
      })
      const userRepository = new UserRepository(allUsers)

      let userHydration = data[2].hydrationData.map(hydroUser => {
        let currentHydration = new Hydration(hydroUser)
        return currentHydration
      })
      
      // userSleep = data[1].sleepData.map(userSleep => {
      //   let currentSleep = new Sleep(userSleep.id, userSleep.date, userSleep.hoursSlept, userSleep.sleepQuality)
      //   return currentSleep
      // })
      // let randomUser = allUsers.userData[Math.floor(Math.random() * allUsers.userData.length)]
      // renderAllInfo(randomUser)
      // console.log("users", data[0].userData);
      // console.log("sleep", data[1]);
      // console.log("hydration", data[2]);
      // console.log("users", data[0].userData);
      // console.log(allUsers)
      let randomUser = userRepository.userData[Math.floor(Math.random() * userRepository.userData.length)]
      // console.log(randomUser)
      renderUserInfo(randomUser, userRepository)
      // console.log(userHydration)
      renderHydrationData(userHydration, randomUser)
      // renderAllInfo(randomUser)
      // console.log("users", data[0].userData);
    })

}
// initializeData()


function renderUserInfo(newUser, allUsers) {
  // console.log(newUser)
  // allUsers = new UserRepository(sampleUsers);
  const firstName = newUser.getUserFirstName();
  greeting.innerHTML = `Welcome ${firstName}`
  userInfo.innerHTML = '';

  userInfo.innerHTML += `<h3 class="user-info">User Information</h3>
  <h4 class="user-id">User ID: ${newUser.id}</h4>
  <h4 class="user-name">Name: ${newUser.name}</h4>
  <h4 class="user-address">Address: ${newUser.address}</h4>
  <h4 class="user-email">E-Mail: ${newUser.email}</h4>
  <h4 class="user-stride-length">Stride Length: ${newUser.strideLength}</h4>`;

  stepGoalInfo.innerHTML = '';

  let status
  let stepDifference
  if (newUser.dailyStepGoal < allUsers.getUsersAverageStepGoals()) {
    status = 'below'
    stepDifference = (allUsers.getUsersAverageStepGoals() - newUser.dailyStepGoal)
  } else if (newUser.dailyStepGoal > allUsers.getUsersAverageStepGoals()) {
    status = 'above'
    stepDifference = (newUser.dailyStepGoal - allUsers.getUsersAverageStepGoals())
  } else {
    status = on
    stepDifference = "100%"
  }

  stepGoalInfo.innerHTML += `<h3 class="step-goal">Step Goals</h3>
  <h4 class="your-step-goal">Your Goal: ${newUser.dailyStepGoal}</h4>
  <h4 class="all-users-goals">All Users Goals: ${allUsers.getUsersAverageStepGoals()}</h4>
  <h4 class="goal-average">Your Goal is ${status} average by ${stepDifference}</h4>`
}

function renderHydrationData(userHydration, randomUser) {
  console.log(newUser)
  // console.log(userHydration)
  hydrationInfo.innerHTML = ''
  hydrationInfo.innerHTML +=
    `<h3 class="hydro-info">User Hydration:</h3>
  <h4 class="user-date"></h4>
  <h4 class="number-ounces-consumed-day">${userHydration.mostRecentOunces(userHydration, randomUser.id)}</h4
  <h4 class="number-ounces-consumed-week"></h4`
}

