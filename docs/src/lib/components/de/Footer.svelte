<script>
	import GetStarted from "$lib/components/en/Footer/GetStarted.svelte";
	import { faCodePullRequest } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
</script>

<footer>
	<div class="content">
		<section class="parts">
			<GetStarted></GetStarted>
		</section>

		<h3>Help and Support</h3>
		<section class="info">
			<div class="contribution">
				<h4>Help us make these docs great!</h4>
				<p class="grey">
					This documentation are Open-Source. See something that's wrong or unclear? Submit a pull
					request or create an Issue.
				</p>
				<a href="https://github.com/moinjulian/golf">
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
