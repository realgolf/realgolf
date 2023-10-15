<script>
	import GetStarted from './LandingPage/GetStarted.svelte';
</script>

<footer>
	<div class="content">
		<section class="parts">
			<GetStarted />
			<GetStarted />
			<GetStarted />
		</section>

		<section class="info">
			<div class="contribution">
				<h4>Help us make these docs great!</h4>
				<p class="grey">
					This documentation are Open-Source. See something that's wrong or unclear? Submit a pull
					request or create an Issue.
				</p>
				<a href="https://github.com/moinjulian/golf">
					<button>Make a contribution</button>
				</a>
			</div>
		</section>
	</div>
</footer>

<style lang="scss">
	footer {
		width: 100vw;
		background-color: var(--nav-color);
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
	}
</style>
