export function formatDate(date: Date): string {
	const d = date.getDate().toString().padStart(2, '0');
	const m = (date.getMonth() + 1).toString().padStart(2, '0');
	const y = date.getFullYear().toString();
	return `${d}.${m}.${y}`;
}

export function compose<X>(funs: ((x: X) => X)[]): (x: X) => X {
	if (funs.length === 0) return (x) => x;
	const [first, ...rest] = funs;
	return (x) => compose(rest)(first(x));
}
