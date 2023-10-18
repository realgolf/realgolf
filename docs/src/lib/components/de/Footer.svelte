<script>
	import GetStarted from '$lib/components/de/Footer/GetStarted.svelte';
	import { faCodePullRequest } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
</script>

<footer>
	<div class="content">
		<section class="parts">
			<GetStarted />
		</section>

		<h3>Hilfe und Support</h3>
		<section class="info">
			<div class="contribution">
				<h4>Helfen Sie uns diese Dokumentationen zu verbessern!</h4>
				<p class="grey">
					Diese Dokumentationen sind Open-Source. Haben Sie etwas gesehen was falsch oder unklar
					ist? Reichen Sie eine Pull Request ein oder erstellen Sie ein Issue.
				</p>
				<a href="https://github.com/moinjulian/golf">
					<button><span><Fa icon={faCodePullRequest} /></span>Machen Sie einen Beitrag</button>
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
			padding: 3rem 4rem;

			.parts {
				display: flex;
				flex-direction: row;
			}

			.info {
				padding: 2rem;
				display: flex;
				flex-direction: row;
				border-top: 1px solid var(--border-color);

				.contribution {
					max-width: 25vw;
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
