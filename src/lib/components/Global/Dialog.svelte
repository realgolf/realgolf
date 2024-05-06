<script lang="ts" context="module">
	import sanitizeHTML from '$lib/shared/utils/sanitizeHTML';
	import { writable } from 'svelte/store';

	let dialog: HTMLDialogElement;

	type Dialog_State = {
		text: string;
		modal: boolean;
		confirm?: { text: string; action: () => void } | null;
		save?: { text: string; action: () => void } | null;
		cancel?: { text: string; action: () => void } | null;
	};

	const DEFAULT_STATE: Dialog_State = {
		confirm: { text: 'Ok', action: () => {} },
		cancel: { text: 'Cancel', action: () => {} },
		text: '',
		modal: false
	};

	const dialog_state = writable<Dialog_State | null>(null);
	const visible = writable<boolean>(false);

	export function open_dialog(options: Dialog_State) {
		console.log('open_dialog', options);
		const all_options = { ...DEFAULT_STATE, ...options };
		visible.set(true);
		dialog_state.set(all_options);
		if (all_options.modal) {
			dialog?.showModal();
		} else {
			dialog?.show();
		}
	}

	function close_dialog() {
		visible.set(false);
		dialog?.addEventListener(
			'transitionend',
			() => {
				dialog?.close();
				dialog_state.set(null);
			},
			{ once: true }
		);
	}
</script>

<script lang="ts">
	function confirm() {
		if ($dialog_state?.confirm) {
			$dialog_state.confirm.action();
		}
		close_dialog();
	}

	function save() {
		if ($dialog_state?.save) {
			$dialog_state.save.action();
		}
		close_dialog();
	}

	function cancel() {
		if ($dialog_state?.cancel) {
			$dialog_state.cancel.action();
		}
		close_dialog();
	}

	function handle_keydown(e: KeyboardEvent): void {
		if (e.key === 'Escape' && $dialog_state?.modal) {
			e.preventDefault();
			cancel();
		}
	}
</script>

<svelte:window on:keydown={handle_keydown} />

<dialog bind:this={dialog} class:modal={$dialog_state?.modal} class:visible={$visible}>
	<p use:sanitizeHTML={[$dialog_state?.text ?? '']} />
	<menu>
		{#if $dialog_state?.cancel}
			<button class="button" on:click={cancel}>
				<span use:sanitizeHTML={[$dialog_state.cancel.text]} />
			</button>
		{/if}
		{#if $dialog_state?.save}
			<button class="button" on:click={save}>
				<span use:sanitizeHTML={[$dialog_state.save.text]} />
			</button>
		{/if}
		{#if $dialog_state?.confirm}
			<button class="button" on:click={confirm}>
				<span use:sanitizeHTML={[$dialog_state.confirm.text]} />
			</button>
		{/if}
	</menu>
</dialog>

<style>
	dialog {
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, calc(-50% - 1rem));
		padding: 1rem;
		border: none;
		border-radius: var(--border-radius);
		box-shadow: 0rem 0rem 1rem #000e;
		background-color: var(--nav-color);
		color: var(--font-color);
		font-size: 1.25rem;
		text-align: center;
		opacity: 0;
		transition: opacity 200ms ease, transform 200ms ease;
	}

	dialog.visible {
		opacity: 1;
		transform: translate(-50%, -50%);
	}

	dialog:focus-visible {
		outline: 0.15rem solid white;
		outline-offset: 0.2rem;
	}

	dialog.modal {
		box-shadow: 0rem 0rem 1rem #000e, 0 0 0 100vmax #000a;
	}

	dialog button {
		outline-color: white;
	}

	menu {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		margin-top: 1rem;
		font-size: 1rem;
	}
</style>
