import fm from 'front-matter';

export function get_frontmatter<T extends { id: string }>(glob: Record<string, string>): T[] {
	return Object.entries(glob).map(([path, markdown]) => {
		const id = path.split('/').at(-1)?.replace('.md', '');
		const { attributes } = fm<T>(markdown);
		return { ...attributes, id };
	});
}
