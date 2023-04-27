// declaring DOM variables
let hoursLeft = document.querySelector("#hours");
let minutesLeft = document.querySelector("#minutes");
let secondsLeft = document.querySelector("#seconds");

const endTime = "2023-04-28T09:30:00";

hoursLeft.innerHTML = "";
minutesLeft.innerHTML = "";
secondsLeft.innerHTML = "";

const timer = setInterval(() => {
	const timeRemaining = getRemaining(endTime);

	console.log(timeRemaining);
	hoursLeft.innerHTML = `${timeRemaining[0]}`;
	minutesLeft.innerHTML = `${timeRemaining[1]}`;
	secondsLeft.innerHTML = `${timeRemaining[2]}`;
}, 1000);

// FUNCTIONS DEFINITION
function getRemaining(endTime) {
	const start = new Date().getTime();
	const end = new Date(endTime).getTime();
	const remainingTime = end - start;
	const seconds = Math.floor((remainingTime / 1000) % 60);
	const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
	const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);

	const numToString = (time) => time.toString().padStart(2, "0");

	return [numToString(hours), numToString(minutes), numToString(seconds)];
}
