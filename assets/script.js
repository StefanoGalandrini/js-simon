// declaring DOM variables
let hoursLeft = document.querySelector("#hours");
let minutesLeft = document.querySelector("#minutes");
let secondsLeft = document.querySelector("#seconds");

// declaring global variables for time
let hour;
let mins;
let secs;

const endTime = "2023-04-28T09:30:00";
const timeRemaining = getTimeRemaining(endTime);

function getTimeRemaining(endTime) {
	const start = new Date().getTime();
	const end = new Date(endTime).getTime();
	const remainingTime = end - start;
	const seconds = Math.floor((remainingTime / 1000) % 60);
	const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
	const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);

	return [hours, minutes, seconds];
}
