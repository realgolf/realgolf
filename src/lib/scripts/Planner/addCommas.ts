export function addCommas(number: number | undefined): number | undefined {
	if (typeof number === 'number') {
		const numberConverted = Number(number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'));
		return numberConverted;
	} else {
		return undefined;
	}
}
