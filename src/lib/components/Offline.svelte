<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const golfBall = document.getElementById('golf-ball') as HTMLElement;
		const traceLine = document.getElementById('trace-line') as unknown as SVGPathElement;

		if (!golfBall || !traceLine) {
			console.error('Golf ball or trace line not found');
			return;
		}

		// Define the path for the trace line
		const course = document.getElementById('golf-course') as HTMLElement;
		const courseWidth = course.clientWidth;
		const courseHeight = course.clientHeight;
		const ballRadius = golfBall.clientWidth / 2;
		const holeRadius = 20; // Assumed hole radius

		// Initial and final positions
		const startX = ballRadius;
		const startY = courseHeight * 0.4 + ballRadius;
		const endX = courseWidth - holeRadius * 2;
		const endY = courseHeight * 0.4 + holeRadius;

		// Control point for the quadratic curve (adjust these for the desired curve)
		const controlX = (startX + endX) / 2;
		const controlY = startY - 100; // Adjust this value to change the curve height

		// Define the path for the trace line
		const pathData = `M${startX},${startY} Q${controlX},${controlY} ${endX},${endY}`;
		traceLine.setAttribute('d', pathData);

		// Set up the animation properties for the trace line
		const pathLength = traceLine.getTotalLength();
		traceLine.style.strokeDasharray = pathLength.toString();
		traceLine.style.strokeDashoffset = pathLength.toString();

		// Apply offsetPath to the golf ball
		golfBall.style.offsetPath = `path('${pathData}')`;

		// Start the animations after ensuring styles are applied
		requestAnimationFrame(() => {
			console.log('requestAnimationFrame');
			traceLine.style.animation = 'trace 2s linear infinite';
			golfBall.style.animation = 'moveBall 2s linear infinite';

			// Ensure animations start
			traceLine.style.animationPlayState = 'running';
			golfBall.style.animationPlayState = 'running';
		});
	});
</script>

<div class="center">
	<div id="golf-course">
		<svg id="trace-line-svg" width="100%" height="100%">
			<path id="trace-line" fill="none" stroke="yellow" stroke-width="2" />
		</svg>
		<div id="golf-ball" />
		<div id="hole" />
	</div>
	<img src="/logo.PNG" alt="Real Golf Games Logo" />
	<h1>Offline</h1>
	<p>We think you are offline</p>
	<p>Please check your network connection</p>
</div>

<style lang="scss">
	.center {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
		flex-direction: column;

		img {
			width: 256px;
			height: 256px;
		}

		#golf-course {
			position: relative;
			width: 80vw;
			height: 50vh;
			background-color: #228b22; /* Green background for grass */
			border: 2px solid #006400;
			border-radius: 10px;
			overflow: hidden;

			#trace-line-svg {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}

			#trace-line {
				stroke-dasharray: 0;
				stroke-dashoffset: 0;
			}

			#golf-ball {
				position: absolute;
				width: 30px;
				height: 30px;
				background-color: white;
				border-radius: 50%;
				transform-origin: center;
			}

			#hole {
				position: absolute;
				width: 40px;
				height: 40px;
				background-color: black;
				border-radius: 50%;
				top: 40%;
				right: 5%;
			}
		}
	}

	@keyframes trace {
		to {
			stroke-dashoffset: 0;
		}
	}

	@keyframes moveBall {
		to {
			offset-distance: 100%;
		}
	}
</style>
