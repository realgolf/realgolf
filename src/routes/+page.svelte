<script lang="ts">
	import Exact from '$lib/components/Home_Page/Feature/Exact.svelte';
	import FourWinning from '$lib/components/Home_Page/Feature/FourWinning.svelte';
	import Precision from '$lib/components/Home_Page/Feature/Precision.svelte';
	import { _, isLoading } from 'svelte-i18n';
</script>

<svelte:head>
	<title>RealGolf.Games</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<main>
		<section class="hero">
			<div class="hero-content">
				<img src="/home_page/banner.png" alt="RealGolf.Games Banner" />
				<p id="ultimate_destination">
					{$_('ultimate_destination')}
				</p>
				<a href="/register" class="btn" id="sign_up_button_homepage"
					>{$_('sign_up_button_homepage')}</a
				>
			</div>
		</section>

		<section class="features">
			<h2 id="features_heading_homepage">{$_('features_heading_homepage')}</h2>
			<div class="feature-elements">
				<FourWinning />
				<Exact />
				<Precision />
			</div>
		</section>

		<div class="bottom">
			<section class="testimonial">
				<h2 id="what_our_user_say">{$_('what_our_user_say')}</h2>
				<blockquote id="user_quote">
					"{$_('user_quote')}"
				</blockquote>
				<cite>- <a href="/Thorsten">Thorsten Hammer</a>, {$_('first_user')}</cite>
			</section>

			<section class="cta">
				<h2>{$_('ready_to_take_your_golf_game')}</h2>
				<p>
					{$_('challenge_during_training')}
				</p>
				<a href="/register" class="btn">{$_('sign_up_button_homepage')}</a>
			</section>
		</div>
	</main>
{/if}

<style lang="scss">
	@import '$lib/scss/Home_page/main.scss';
</style>
