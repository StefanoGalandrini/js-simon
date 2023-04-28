// declaring DOM variables
let hoursLeft = document.querySelector("#hours");
let minutesLeft = document.querySelector("#minutes");
let secondsLeft = document.querySelector("#seconds");

// set final date and time
const endTime = "2023-04-28T09:30:00";

// clear and reset DOM innerHTML
hoursLeft.innerHTML = "";
minutesLeft.innerHTML = "";
secondsLeft.innerHTML = "";

// check time every second and update DOM innerHTML
const timer = setInterval(() => {
	// function that returns an array with remaining time
	const timeRemaining = getRemaining(endTime);

	const color = textColor(
		timeRemaining[0],
		timeRemaining[1],
		timeRemaining[2],
	);

	// inject array values in DOM elements
	hoursLeft.innerHTML = `${timeRemaining[0]}`;
	minutesLeft.innerHTML = `${timeRemaining[1]}`;
	secondsLeft.innerHTML = `${timeRemaining[2]}`;

	// gradually changes color to white
	hoursLeft.style.color = color[0];
	minutesLeft.style.color = color[1];
	secondsLeft.style.color = color[2];

	// condition to stop the timer when it gets to endTime
	if (
		timeRemaining[0] <= 0 &&
		timeRemaining[1] <= 0 &&
		timeRemaining[2] <= 0
	) {
		clearInterval(timer);
		hoursLeft.innerHTML = "00";
		minutesLeft.innerHTML = "00";
		secondsLeft.innerHTML = "00";
	}
}, 1000);

/*
FUNCTIONS DEFINITION
*/

// - receives the final date and time (endTime)
// - gets actual date and time
// - calculates the difference in milliseconds
// - transforms millisenconds in hours, minutes and seconds
// - converts numbers to 2-charachters strings eventually adding prefix "0"
// - returns an array with ["hh", "mm", "ss"]

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

// function to gradually change numbers color to white
// actually useless but just for fun
function textColor(h, m, s) {
	const hCol = (255 - (220 / 24) * h).toString();
	const mCol = (255 - (220 / 60) * m).toString();
	const sCol = (255 - (220 / 60) * s).toString();

	const hourColor = `rgb(${hCol * 1.5}, ${hCol * 1.5}, ${hCol})`;
	const minColor = `rgb(${mCol * 1.5}, ${mCol * 1.5}, ${mCol})`;
	const secColor = `rgb(${sCol * 1.5}, ${sCol * 1.5}, ${sCol})`;
	return [hourColor, minColor, secColor];
}
