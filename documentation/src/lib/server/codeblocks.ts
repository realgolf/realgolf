import he from 'he';
import shiki from 'shiki';

const highlighter = await shiki.getHighlighter({
	theme: 'slack-dark',
	langs: ['javascript', 'html', 'css', 'svelte', 'scss', 'git-commit', 'markdown', 'json', 'pug']
});

const code_regex = /<pre><code\s+class="language-(\w+)">([\s\S]+?)<\/code><\/pre>/gi;

const style_regex = /<pre([^>]*)style="[^"]*background-color:[^"]*"(.*?)>/g;

export function highlight_code(htmlContent: string) {
	return htmlContent.replace(code_regex, (_, lang, code) => {
		const code_decoded = he.decode(code);
		const code_highlighted = highlighter.codeToHtml(code_decoded.trim(), { lang });
		const code_without_bg = code_highlighted.replace(style_regex, '<pre$1$2>');

		return code_without_bg;
	});
}
