<script lang="ts">
	import sanitizeHTML from '$lib/shared/utils/sanitizeHTML';
	import { _, isLoading } from 'svelte-i18n';

	let github_link = `<a href="https://github.com/realgolf/realgolf/issues">GitHub</a>`;
	let support_email = `<a href="mailto:support@realgolf.games">support@realgolf.games</a>`;
	let contributors = `<a href="https://github.com/realgolf/realgolf/blob/main/Contributors.md">Contributors.md</a>`;
	let svelte_kit = `<a href="https://kit.svelte.dev">SvelteKit</a>`;
	let mongodb = `<a href="https://www.mongodb.com">MongoDB</a>`;
</script>

<svelte:head>
	<title>RealGolf.Games - {$_('faq')}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<main class="wrapper">
		<h1>{$_('faq')}</h1>
		<main class="question">
			<details>
				<summary>{$_('faq_question_0_title')}</summary>
				<div>
					<p>{$_('faq_question_0_answer_by')}</p>
					<p>
						{$_('faq_answer_0_content')}
					</p>
				</div>
			</details>
		</main>

		<main class="question">
			<details>
				<summary>{$_('faq_question_1_title')}</summary>
				<div>
					<p>
						{$_('faq_answer_1_steps')}
					</p>
					<ol class="faq-list">
						<li>
							<strong>{$_('faq_answer_1_step_1_title')}:</strong>
							{$_('faq_answer_1_step_1_description')}
						</li>
						<li>
							<strong>{$_('faq_answer_1_step_2_title')}:</strong>
							{$_('faq_answer_1_step_2_description')}
						</li>
						<li>
							<strong>{$_('faq_answer_1_step_3_title')}:</strong>
							{$_('faq_answer_1_step_3_description')}
						</li>
						<li>
							<strong>{$_('faq_answer_1_step_4_title')}:</strong>
							{$_('faq_answer_1_step_4_description')}
						</li>
					</ol>
					<p>
						{$_('faq_answer_1_conclusion')}
					</p>
				</div>
			</details>
		</main>

		<main class="question">
			<details>
				<summary>{$_('faq_question_2_title')}</summary>
				<div>
					<p>
						{$_('faq_answer_2_content')}
					</p>
				</div>
			</details>
		</main>

		<main class="question">
			<details>
				<summary>{$_('faq_question_3_title')}</summary>
				<div>
					<p>
						{$_('faq_answer_3_steps')}
					</p>
					<ul class="faq-list">
						<li>
							<strong>{$_('faq_answer_3_step_1_title')}:</strong>
							<p
								use:sanitizeHTML={[
									$_('faq_answer_3_step_1_description', { values: { github_link } })
								]}
							/>
						</li>
						<li>
							<strong>{$_('faq_answer_3_step_2_title')}:</strong>
							<p
								use:sanitizeHTML={[
									$_('faq_answer_3_step_2_description', { values: { support_email } })
								]}
							/>
						</li>
					</ul>
					<p use:sanitizeHTML={[$_('faq_answer_3_conclusion', { values: { contributors } })]} />
				</div>
			</details>
		</main>

		<main class="question">
			<details>
				<summary>{$_('faq_question_4_title')}</summary>
				<div>
					<p
						use:sanitizeHTML={[
							$_('faq_answer_4_content_1', { values: { github_link, support_email } })
						]}
					/>
					<p
						use:sanitizeHTML={[
							$_('faq_answer_4_content_2', { values: { github_link, support_email } })
						]}
					/>
				</div>
			</details>
		</main>

		<main class="question">
			<details>
				<summary>{$_('faq_question_5_title')}</summary>
				<div>
					<p use:sanitizeHTML={[$_('faq_answer_5_content')]} />
				</div>
			</details>
		</main>

		<main class="question">
			<details>
				<summary>{$_('faq_question_6_title')}</summary>
				<div>
					<p>
						{$_('faq_answer_6_content')}
					</p>
				</div>
			</details>
		</main>

		<main class="question">
			<details>
				<summary>{$_('faq_question_7_title')}</summary>
				<div>
					<p>
						{$_('faq_answer_7_content')}
					</p>
				</div>
			</details>
		</main>

		<main class="question">
			<details>
				<summary>{$_('faq_question_8_title')}</summary>
				<div>
					<p>{$_('faq_answer_8_technologies')}</p>
					<ul class="faq-list">
						<li use:sanitizeHTML={[$_('faq_answer_8_sveltekit', { values: { svelte_kit } })]} />
						<li use:sanitizeHTML={[$_('faq_answer_8_mongodb', { values: { mongodb } })]} />
					</ul>
					<p>
						{$_('faq_answer_8_conclusion')}
					</p>
				</div>
			</details>
		</main>

		<main class="question">
			<details>
				<summary>{$_('faq_question_9_title')}</summary>
				<div>
					<p>
						{$_('faq_answer_9_steps')}
					</p>
					<ol class="faq-list">
						<li use:sanitizeHTML={[$_('faq_answer_9_steps_1')]} />
						<li use:sanitizeHTML={[$_('faq_answer_9_steps_2')]} />
						<li use:sanitizeHTML={[$_('faq_answer_9_steps_3')]} />
					</ol>
					<p>
						{$_('faq_answer_9_conclusion')}
					</p>
				</div>
			</details>
		</main>

		<main class="question">
			<details>
				<summary>{$_('faq_question_10_title')}</summary>
				<div>
					<p use:sanitizeHTML={[$_('faq_answer_10_steps')]} />
					<ul class="faq-list">
						<li use:sanitizeHTML={[$_('faq_answer_10_steps_1')]} />
						<li use:sanitizeHTML={[$_('faq_answer_10_steps_2')]} />
					</ul>
					<p>
						{$_('faq_answer_10_conclusion')}
					</p>
				</div>
			</details>
		</main>

		<main class="question">
			<details>
				<summary>{$_('faq_further_questions')}</summary>
				<div>
					<p
						use:sanitizeHTML={[$_('faq_further_questions_content', { values: { support_email } })]}
					/>
				</div>
			</details>
		</main>
	</main>
{/if}

<style lang="scss">
	h1 {
		text-align: center;
	}

	.wrapper {
		width: 90vw;
		margin: 0 auto;

		.question {
			border-top: 1px solid var(--border-color);
			padding: 1rem 0;
			transition: background-color 0.3s ease;
			max-width: 40rem;
			margin: 0 auto;
			padding-inline: 1rem;

			details {
				summary {
					font-weight: 600;
					line-height: 1.2rem;
					padding: 0.5rem 1.5rem;
					cursor: pointer;

					&:hover {
						color: var(--highlight-color);
					}
				}

				div {
					padding: 0 1.5rem 1.5rem;

					.faq-list {
						padding-left: 1.5em;
					}
				}
			}
		}
	}
</style>
