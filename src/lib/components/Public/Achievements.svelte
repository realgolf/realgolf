<script lang="ts">
	import {
		bronze_color,
		gold_color,
		platinum_color,
		silver_color
	} from '$lib/scripts/achievement_color_codes';
	import { _ } from 'svelte-i18n';
	import type { PageData } from '../../../routes/[name]/$types';

	export let data: PageData;

	let activeAchievementIndex: number | null;

	function handleAchievementClick(index: number) {
		console.log(activeAchievementIndex);
		activeAchievementIndex = index === activeAchievementIndex ? null : index;
	}
</script>

{#if data.achievements && data.achievements.length > 0}
	<div class="achievements">
		<h3>{$_("achievements")}</h3>
		{#each data.achievements as achievement, index}
			<div class="achievement">
				<div
					tabindex="0"
					role="button"
					class="heading"
					on:click={() => handleAchievementClick(index)}
					on:keydown={(event) => {
						if (event.key === ' ') {
							handleAchievementClick(index);
						}
					}}
				>
					<h4>
						{achievement.title}
					</h4>
					{#if achievement.is_unlocked.bronze_unlocked == true}
						<p class="tiers" style="background-color: {bronze_color};">1x</p>
					{:else if achievement.is_unlocked.silver_unlocked == true}
						<p class="tiers" style="background-color: {silver_color};">2x</p>
					{:else if achievement.is_unlocked.gold_unlocked == true}
						<p class="tiers" style="background-color: {gold_color};">3x</p>
					{:else if achievement.is_unlocked.platinum_unlocked == true}
						<p class="tiers" style="background-color: {platinum_color};">4x</p>
					{/if}
				</div>
				{#if activeAchievementIndex == index}
					<div class="description">
						<p>{achievement.description}</p>
					</div>
					<div class="history">
						<p>{$_("history")}</p>
						<ul>
							<li>
								{new Date(achievement.history.first_unlocked_date).toLocaleDateString()}
								-
								<a href="/{data.user_username}/games/{achievement.history.first_unlocked_game}"
									>{achievement.history.first_unlocked_game}</a
								>
							</li>
						</ul>
					</div>
				{/if}
			</div>
		{/each}
	</div>
{/if}

<style lang="scss">
	.achievements {
		margin-top: 20px;

		h3 {
			margin-bottom: 10px;
		}

		.achievement {
			max-width: 20rem;
			padding: 5px 5px;
			border: 1px solid var(--border-color);

			.heading {
				display: flex;
				flex-direction: row;

				&:focus {
					outline: none;
				}

				h4 {
					height: max-content;
				}

				h4,
				.tiers {
					display: flex;
					justify-content: center;
					align-items: center; /* Align items in the cross-axis */
				}

				.tiers {
					max-width: max-content;
					color: black;
					padding: 3px 10px;
					border-radius: 2em;
					width: 100%;
					margin-left: 4rem;
					margin-bottom: 0 !important;
				}
			}

			.history {
				padding: 0rem 1rem;

				ul {
					padding: 0rem 1rem;
				}
			}
		}
	}
</style>
