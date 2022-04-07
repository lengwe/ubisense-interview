# Getting Started

This project is for Ubisense Take-Home exercise, here is the link of [the project instruction ](https://dev.azure.com/Ubisense-RTLS/Training/_git/ubisense-takehome-exercise?path=/README.md&version=GBmain&_a=preview). This static website is written using the React framwork.

## Description

### Project Directory Structure
```
📦src
 ┣ 📂components
 ┃ ┣ 📂EngineCard
 ┃ ┃ ┣ CurrentProductCard.js
 ┃ ┃ ┣ EngineCard.js
 ┃ ┃ ┣ EngineCard.module.css
 ┃ ┃ ┣ NoProductCard.js
 ┃ ┃ ┗ index.js
 ┃ ┣ 📂ProgressBar
 ┃ ┃ ┣ ProgressBar.js
 ┃ ┃ ┣ ProgressBar.module.css
 ┃ ┃ ┗ index.js
 ┃ ┣ 📂TopBar
 ┃ ┃ ┣ TopBar.js
 ┃ ┃ ┣ TopBar.module.css
 ┃ ┃ ┗ index.js
 ┃ ┗ index.js
 ┣ 📂pages
 ┃ ┗ 📂DashboardScreen
 ┃ ┃ ┣ 📂api
 ┃ ┃ ┃ ┣ dashboardApi.js
 ┃ ┃ ┃ ┗ mockData.js
 ┃ ┃ ┣ DashboardScreen.js
 ┃ ┃ ┣ DashboardScreen.module.css
 ┃ ┃ ┗ index.js
 ┣ 📂utils
 ┃ ┣ timeConverter.js
 ┃ ┗ useCountdown.js
 ┣ App.js
 ┣ App.test.js
 ┣ index.css
 ┣ index.js
 ┣ logo.svg
 ┣ reportWebVitals.js
 ┗ setupTests.js
 ```

### **Backend**

Two API endpoints are provided which return lists of engines and workstations. Since the application is only required to fetch the data once, therefore all the data is retrieved and mapped as soon as the application starts.

As an result, the code for the backend part is fairly starightforward(in the *`dashboardApi.js`*), I chose `axios` to make `GET` requests from the provided API endpoints, which then returns Promise objects.

I also decided to mock some fake data(in the *`mockData.js`*) which is just for demostrating the time elapsed of certain engines that are very close to the cycle time.
### **Frontend**
#### **Data Retrieving**
When the appplication starts, it normally takes time for fetching the data, therefore I decided to use a loading state to indicate this process. Since I have two Promise objects returned from the *`dashboardApi.js`*, using the `Promise.all` method can return a single Promise object when all of the input's promises have resolved and the data is then resolved to an array of results.

In terms of the error handling, a catch black and the error state are implemented. If the error state is `true`, a different error component will then render to notify the user.

#### **User Interface**
I assume that the workstation card is clickable which navigates the user to another page, so each card is add some transformations when the user hover the cursor on top of it.

In terms of the responsiveness, the application is considered to be displayed nicely on different screen sizes. 
- On a big screen size, the workstation cards are displayed in a 2xN grid configuration.
- On a medium screen size, the workstation cards are displayed in a 1xN grid configuration.
- On a small screen size, the workstation cards are displayed in a 1xN grid configuration and the flex direction of the engine image/info is changed to `column`

In terms of the time elapsed, I decided to use different colour system to represent the relationship between the cycle time and the time elapsed. 
- If the time elapsed reaches 60% of the cycle time, a orange warning icon will show next to the "Time Elapsed" title and the progress the progress bar will turn orange.
- If the time elapsed reaches 80% of the cycle time, a red warning icon will the show and the progress bar will turn red.

Note that the progress bar is moving in real-time according to the current time.
  
However, I then realised that only showing the progress bar with different colours can be not very intuitive to the user, because the progress bar only shows a relative relationship. Hence, I then decided to display the exact remaining time under the progress bar when the time elapsed reaches over 60% of the cycle time.

 A custom hook `useCountdown()` is implemented to calculate the time elasped and the remaining time.

## To run the application 
Clone this repo to your local machine and in the project root directory, you can simply run: ```npm start```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

