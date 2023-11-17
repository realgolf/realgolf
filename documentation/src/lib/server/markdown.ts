import markdownit from 'markdown-it';
const md = new markdownit();

export function render_markdown(str: string) {
	return md.render(str);
}
