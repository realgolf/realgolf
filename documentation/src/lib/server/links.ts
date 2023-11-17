const regex = /<a([^>]*)href=["'](https?:\/\/[^"']+)["']([^>]*)>/gi;

export function transform_external_links(html_content: string) {
	return html_content.replace(regex, '<a$1href="$2"$3 target="_blank">');
}
