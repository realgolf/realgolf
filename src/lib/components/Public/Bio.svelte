<script lang="ts">
	import type { Social } from "$lib/scripts/Public/modify_socials";
	import { modify_social } from '$lib/scripts/Public/modify_socials';
	import sanitizeHTML from '$lib/shared/utils/sanitizeHTML';
	import type { matchedSocials } from '$lib/types/matched_socials';
	import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { _ } from 'svelte-i18n';
	import type { PageData } from '../../../routes/[name]/$types';
	import EmailPublic from './Bio/Email_Public.svelte';
	import Followers from './Bio/Followers.svelte';
	import Pronoun from './Bio/Pronoun.svelte';
	import Socials from './Bio/Socials.svelte';
	import Status_Edit from './Bio/Status/Status.svelte';
	import Status from './Status.svelte';

	export let data: PageData;

	let editing = false;
	let socials: Social[] = data.socials as Social[]

	function handleCancel(event: { preventDefault: () => void }) {
		event.preventDefault();
		editing = false;
	}

	let display_socials = data.socials?.map((social) => `${social}\n`).join('') ?? '';

	type socialsRender = matchedSocials[];

	let socials_render: socialsRender = [];

	// Call modify_social() and assign the result to socials_render
	socials_render = modify_social(socials);
</script>

<div class="bio">
	{#if editing}
		<form action="?/edit_profile" method="POST">
			<label for="bio">{$_('bio')}</label>
			<textarea bind:value={data.edit_bio} name="bio" id="bio" rows="3" />
			<EmailPublic {data} />
			<Pronoun {data} />
			<Socials {display_socials} />
			<Status_Edit {data} />
			<button type="submit">Save</button>
			<button type="button" on:click={handleCancel}>Cancel</button>
		</form>
	{:else if data.sameUser}
		{#if data.user_status.text}
			<Status {data} />
		{/if}
		{#if data.user_bio}
			<p class="bio-text" use:sanitizeHTML={[data.user_bio]} />
		{/if}
		{#if data.followers && data.following}
			<Followers {data} />
		{/if}
		<button style="margin-bottom: 1rem;" on:click={() => (editing = true)}
			>{$_('edit_profile')}</button
		>
		<br />
		{#if data.user_email_public}
			<a href="mailto:{data.user_email}"><Fa icon={faEnvelope} /> <span>{data.user_email}</span></a>
		{/if}
		{#if data.socials}
			<div class="socials" style="margin-bottom: 1rem;">
				{#each socials_render as social}
					{#if social.logo != undefined}
						<p style="margin-bottom: 0px;">
							<a target="_blank" style="text-decoration: none;" href={social.link}
								><span><Fa icon={social.logo} /></span> {social.username}</a
							>
						</p>
					{:else}
						<p style="margin-bottom: 0px;">
							<a target="_blank" style="text-decoration: none;" href={social.link}>
								<span><Fa icon={faLink} /></span>
								<span>{social.username}</span>
							</a>
						</p>
					{/if}
				{/each}
			</div>
		{/if}
	{:else}
		{#if data.user_status && data.user_status.text}
			<Status {data} />
		{/if}
		{#if data.user_bio}
			<p>{data.user_bio}</p>
		{/if}
		{#if data.followers && data.following && data.user_username}
			<Followers {data} />
			{#if data.serialiezed_cookie_user.user.following.list.some((username) => username?.username === data.user_username)}
				<form action="?/unfollow" method="POST">
					<button type="submit">{$_('un_follow')}</button>
				</form>
			{:else}
				<form action="?/follow" method="POST">
					<button type="submit">{$_('follow')}</button>
				</form>
			{/if}
		{/if}
		{#if data.user_email_public == true}
			<p><Fa icon={faEnvelope} /> <span>{data.user_email}</span></p>
		{/if}
		<div class="socials">
			{#each socials_render as social}
				{#if social.logo != undefined}
					<p style="margin-bottom: 0px;">
						<a target="_blank" style="text-decoration: none;" href={social.link}
							><span><Fa icon={social.logo} /></span> {social.username}</a
						>
					</p>
				{:else}
					<p style="margin-bottom: 0px;">
						<a target="_blank" style="text-decoration: none;" href={social.link}>
							<span><Fa icon={faLink} /></span>
							<span>{social.username}</span>
						</a>
					</p>
				{/if}
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	@import '$lib/scss/Public/Bio.scss';
</style>
