let countdown = new Date('Oct 27, 2020 15:00:00').getTime();

// Update countdown every one second
let timing = setInterval(() => {
	// Get today's date and time
	let now = new Date().getTime();

	// Find the distance between now an the count down date
	let distance = countdown - now;

	// Calculate time for days, hours, minutes and seconds
	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById('day').innerHTML = days;
	document.getElementById('hour').innerHTML = hours;
	document.getElementById('min').innerHTML = minutes;
	document.getElementById('sec').innerHTML = seconds;

	if (distance <= 0) {
		clearInterval(timing);
		document.getElementById('countdown').innerHTML = 'We are ready';
	}
}, 1000);
