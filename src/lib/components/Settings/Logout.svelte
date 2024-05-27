<script lang="ts">
    import { _ } from 'svelte-i18n';
</script>

<form action="/logout" method="POST" class="logout-form">
    <button>{$_('sign_out')}</button>
</form>