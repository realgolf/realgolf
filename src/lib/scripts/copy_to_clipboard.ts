export function copy_to_clipboard(id: string, show_copy_info: boolean = false) {
	if (window) {
		window.navigator.clipboard.writeText(id);
		show_copy_info = true;
		setTimeout(() => {
			show_copy_info = false;
		}, 3000);
	}
	return show_copy_info;
}
