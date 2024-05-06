<script lang="ts">
	import { emojis, type Emoji } from '$lib/scripts/emojis';
	import { fly } from 'svelte/transition';

	export let HTMLInputElement: HTMLInputElement;

	const emojiIcon = emojis[141].emoji;
	let modalOpen = false;
	let selectedEmoji = '';

	// Define emoji categories and icons
	let emojiHeaderSet = [
		{ name: 'Smileys & People', icon: '😀' },
		{ name: 'Animals & Nature', icon: '🐶' },
		{ name: 'Travel & Places', icon: '✈️' },
		{ name: 'Flags', icon: '🇩🇪' },
		{ name: 'Objects', icon: '⌚' },
		{ name: 'Activities', icon: '⚽' },
		{ name: 'Symbols', icon: '⭐' },
		{ name: 'Food & Drink', icon: '🍔' }
	];

	// Filter emojis by category excluding "Skin Tones"
	let emojisFiltered = emojis.filter((emoji) => emoji.category !== 'Skin Tones');

	// Group emojis by category
	let emojisByCategory: Record<string, Emoji[]> = {};
	emojisFiltered.forEach((emoji) => {
		if (!emojisByCategory[emoji.category]) {
			emojisByCategory[emoji.category] = [];
		}
		emojisByCategory[emoji.category].push(emoji);
	});

	let selectedCategory = emojiHeaderSet[0].name; // Initialize with the first category

	function chooseEmojiSet(category: string) {
		selectedCategory = category;
	}

	function addEmoji(emoji: string, HTMLInputElement: HTMLInputElement) {
		selectedEmoji = emoji;
		console.log(selectedEmoji);
		if (HTMLInputElement) {
			HTMLInputElement.value = selectedEmoji;
		} else {
			console.error('HTMLInputElement is null or undefined.');
		}
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div id="emoji-opener-icon" on:click={() => (modalOpen = true)}>{emojiIcon}</div>

{#if modalOpen}
	<div id="emoji-cont" transition:fly={{ y: -30 }}>
		<header>
			{#each emojiHeaderSet as emoji}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div on:click={() => chooseEmojiSet(emoji.name)}>{emoji.icon}</div>
			{/each}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div id="closer-icon" on:click={() => (modalOpen = false)}>X</div>
		</header>

		{#if emojisByCategory[selectedCategory]}
			{#each emojisByCategory[selectedCategory] as emoji}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<span on:click={() => addEmoji(emoji.emoji, HTMLInputElement)}>{emoji.emoji}</span>
			{/each}
		{:else}
			<p>No emojis available for this category.</p>
		{/if}
	</div>
{/if}

<style lang="scss">
	#emoji-cont {
		max-width: 300px;
		max-height: 248px;
		overflow-y: scroll;
		overflow-x: hidden;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		margin-left: 10px;
		background-color: var(--nav-color);
		z-index: 200;
		border: 1px solid var(--border-color);

		header {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-around;
			border: 1px solid var(--border-color);

			div {
				cursor: pointer;
			}

			#closer-icon {
				font-size: 1.5rem;
				font-weight: bold;
				text-align: right;
			}
		}

		span {
			font-size: 1.5rem;
			padding: 0.3rem;
			border: 1px solid var(--border-color);
			background: var(--nav-color);
			cursor: pointer;

			&:active {
				background: var(--nav-color);
			}
		}
	}
</style>
