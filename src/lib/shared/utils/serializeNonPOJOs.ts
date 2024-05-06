/**
 * Serialize non-POJOs to JSON object
 * To convert non-POJOs to JSON object
 * @param value
 * @returns JSON object
 */
export const serializeNonPOJOs = (value: object | null) => {
	return JSON.parse(JSON.stringify(value));
};
