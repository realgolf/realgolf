<script lang="ts">
	import { faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
	import {
		faBookBookmark,
		faBookOpenReader,
		faEnvelope,
		faUsers
	} from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	import { _, isLoading } from 'svelte-i18n';
</script>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<footer>
		<div class="container">
			<div class="row">
				<div class="same-line">
					<div class="col-md-6 first-row">
						<h3>{$_('contact_us')}</h3>
						<p>
							<Fa icon={faEnvelope} />
							{$_('email')}:
							<a href="mailto:info@realgolf.games">info@realgolf.games</a>
						</p>
						<p>
							<Fa icon={faUsers} /> <a href="/support">{$_('support')}</a>
						</p>
					</div>
					<div class="col-md-6 first-row">
						<h3>{$_('follow_us')}</h3>
						<p>
							<Fa icon={faXTwitter} /> Twitter:
							<a href="https://twitter.com/realgolfgames">@RealGolfGames</a>
						</p>
						<p>
							<Fa icon={faInstagram} /> Instagram:
							<a href="https://instagram.com/realgolfgames">@RealGolfGames</a>
						</p>
						<p>
							<Fa icon={faYoutube} /> YouTube:
							<a href="https://www.youtube.com/@realgolfgames">RealGolfGames</a>
						</p>
					</div>
					<div class="col-md-6 first-row">
						<h3>{$_('explore_more')}</h3>
						<p>
							<Fa icon={faBookOpenReader} /> <a href="/blog">{$_('blog')}</a>
						</p>
						<p>
							<Fa icon={faBookBookmark} />
							<a href="/rules">{$_('golfrules')}</a>
						</p>
					</div>
				</div>
				<div class="col-md-6 second-row">
					<p>&copy; 2021 - {new Date().getFullYear()} RealGolf.Games</p>
				</div>
			</div>
		</div>
	</footer>
{/if}

<style lang="scss">
	footer {
		border-top: 0.1rem solid rgb(44, 46, 51);
		height: max-content;
		margin-top: 5vh;
		padding: 2vh 3vw;
		overflow-x: hidden;
		display: flex;
		justify-content: left;
		line-break: none;

		.container {
			.row {
				display: flex;
				flex-direction: column;

				@media screen and (max-width: 767px) {
					display: flex;
					align-items: center;
				}

				.same-line {
					display: flex !important;
					flex-wrap: wrap !important;

					@media screen and (min-width: 767px) {
						.first-row:not(:first-child) {
							margin: 0 2rem;
						}
					}

					@media only screen and (max-width: 767px) {
						padding: 0 4vw;
						margin-right: -16px;
						margin-left: -16px;
						display: flex;
						flex-direction: column;
					}
				}
			}

			.second-row {
				padding-top: 2rem;

				@media screen and (max-width: 767px) {
					margin-left: 4rem;
				}

				p {
					white-space: nowrap;
				}
			}
		}
	}
</style>
