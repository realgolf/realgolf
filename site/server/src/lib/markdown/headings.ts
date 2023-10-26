function generate_id(text: string): string {
	return text.trim().toLowerCase().replace(/\s+/g, '-');
}

export function add_ids_to_headings(html_content: string): string {
	const modifiedHtmlCode = html_content
		.replace(/<h2>(.*?)<\/h2>/gi, (_, heading) => {
			const id = generate_id(heading);
			return `<h2 id="${id}">${heading}</h2>`;
		})
		.replace(/<h3>(.*?)<\/h3>/gi, (_, heading) => {
			const id = generate_id(heading);
			return `<h3 id="${id}">${heading}</h3>`;
		});

	return modifiedHtmlCode;
}

export function get_table_of_contents(html_content: string): { text: string; id: string }[] {
	const matches = html_content.match(/<h2>(.*?)<\/h2>/gi);
	if (!matches) return [];
	return matches.map((match) => {
		const text = match.replace(/<\/?h2>/g, '');
		const id = text.trim().toLowerCase().replace(/\s+/g, '-');
		return { text, id };
	});
}
