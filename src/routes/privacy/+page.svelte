<script lang="ts">
	import { _, isLoading } from 'svelte-i18n';
</script>

<svelte:head>
	<title>RealGolf.Games - {$_('privacy_policy')}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<h1>{$_('privacy_policy')}</h1>

	<h2>1. {$_('introduction')}</h2>
	<p>
		{$_('introduction_text')}
	</p>

	<h2>2. {$_('controller')}</h2>
	<p>{$_('controller_text')}</p>
	<p>RealGolf.Games<br /><a href="mailto:info@realgolf.games">info@realgolf.games</a></p>

	<h2>{$_('collection_and_processing_of_personal_data')}</h2>
	<p>
		{$_('collection_and_processing_of_personal_data_text')}
	</p>

	<h2>4. {$_('categories_of_personal_data')}</h2>
	<p>{$_('we_procces_the_following_personal_data')}</p>
	<ul>
		<li>{$_('personal_data_contact_details')}</li>
		<li>{$_('personal_data_authentication_data')}</li>
	</ul>

	<h2>{$_('legal_basis_for_data_processing')}</h2>
	<p>{$_('legal_basis_for_data_processing_text')}</p>
	<ul>
		<li>{$_('legal_basis_for_data_procesing_consent')}</li>
		<li>{$_('legal_basis_for_data_processing_performance')}</li>
	</ul>

	<h2>{$_('rights_of_data_subject')}</h2>
	<p>{$_('rights_data_subject_personal_rights')}</p>
	<ul>
		<li>{$_('right_to_information')}</li>
		<li>{$_('right_to_rectification')}</li>
		<li>{$_('right_to_erasure')}</li>
		<li>{$_('right_to_restriction_of_processing')}</li>
		<li>{$_('right_to_data_portability')}</li>
		<li>{$_('right_to_object')}</li>
	</ul>
	<p>{$_('request_to_exercise_data')}</p>

	<h2>{$_('data_security')}</h2>
	<p>
		{$_('data_security_text')}
	</p>
	<ul>
		<li>{$_('data_security_encryption_of_passwords')}</li>
		<li>{$_('access_control')}</li>
		<li>{$_('regular_update_and_review_of_security_measures')}</li>
	</ul>

	<h2>{$_('data_retention_period')}</h2>
	<p>
		{$_('data_retention_period_text')}
	</p>

	<h2>{$_('changes_to_data_privacy_policy')}</h2>
	<p>
		{$_('changes_to_data_privacy_policy_text')}
	</p>

	<h2>{$_('data_privacy_policy_contact')}</h2>
	<p>{$_('questions_about_data_privacy')}</p>
	<p>RealGolf.Games<br /><a href="mailto:info@realgolf.games">info@realgolf.games</a></p>
{/if}

<style lang="scss">
	ul {
		margin-left: 1rem;
	}
</style>
