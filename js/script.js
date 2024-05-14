"use strict";

function Timer() {

    const days = document.querySelector("#days");
    const hours = document.querySelector("#hours");
    const minutes = document.querySelector("#minutes");
    const seconds = document.querySelector("#seconds");

    const currentMonth = new Date().getMonth() + 1;
    console.log(currentMonth);

    const nextMonth = new Date(`${currentMonth} 20 2024`);
    console.log(nextMonth);

    const currentTime = new Date();
    const diff = nextMonth - currentTime;
    console.log(diff);

    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    console.log(daysLeft);
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    console.log(hoursLeft);
    const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
    console.log(minutesLeft);
    const secondsLeft = Math.floor(diff / 1000) % 60;
    console.log(secondsLeft);

    days.innerText = daysLeft < 10 ? "0" + daysLeft : daysLeft;
    hours.innerText = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
    minutes.innerText = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
};

setInterval(Timer, 1000);


