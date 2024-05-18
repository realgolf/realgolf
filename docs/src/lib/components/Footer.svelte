<script>
	import GetStarted from '$lib/components/Footer/GetStarted.svelte';
	import { faCodePullRequest } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import Achievements from './Footer/Achievements.svelte';
	import Basics from './Footer/Basics.svelte';
	import Games from './Footer/Games.svelte';
	import PublicProfile from './Footer/PublicProfile.svelte';
</script>

<footer>
	<div class="content">
		<section class="parts">
			<GetStarted></GetStarted>
			<Basics></Basics>
			<Games></Games>
			<PublicProfile></PublicProfile>
			<Achievements></Achievements>
		</section>

		<h3>Help and Support</h3>
		<section class="info">
			<div class="contribution">
				<h4>Help us make these docs great!</h4>
				<p class="grey">
					This documentation are Open-Source. <br /> See something that's wrong or unclear? <br /> Submit
					a pull request or create an Issue.
				</p>
				<a href="https://github.com/realgolf/docs" target="_blank">
					<button><span><Fa icon={faCodePullRequest} /></span>Make a contribution</button>
				</a>
			</div>
		</section>
	</div>
</footer>

<style lang="scss">
	footer {
		width: 100vw;
		background-color: var(--background-color);
		border-top: 1px solid var(--border-color);
		margin-top: 2rem;
		display: flex;
		justify-content: center;
		align-items: left;
		flex-direction: column;

		.content {
			padding: 1rem 1rem;

			.parts {
				display: flex !important;
				flex-wrap: wrap !important;

				@media only screen and (max-width: 767px) {
					margin-right: -16px;
					margin-left: -16px;
					display: flex;
					flex-direction: column;
				}
			}
			.info {
				padding: 0.5rem;
				display: flex;
				flex-direction: row;
				border-top: 1px solid var(--border-color);

				.contribution {
					max-width: 90vw;
				}

				button {
					background-color: var(--background-color);
					border: 1px solid var(--accent-color);
				}
			}
		}

		.grey {
			color: grey;
			font-size: 0.9rem;
		}

		span {
			margin-right: 0.5rem;
		}
	}
</style>
