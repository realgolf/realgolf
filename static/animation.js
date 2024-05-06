const saved_animation = localStorage.getItem('animation');

if (saved_animation) {
	document.body.setAttribute('data-animation', saved_animation);
} else {
	const animation = 'true';
	document.body.setAttribute('data-animation', animation);
	localStorage.setItem('animation', animation);
}
