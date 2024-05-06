/**
 * Extracts mentions from a string.
 * The mentions are prefixed with '@' and are ended by a space, comma, period, exclamation mark, or question mark.
 * @param text
 * @returns mentions
 */
export function extractMentions(text: string | null | undefined): string[] | undefined[] {
	const mentions: string[] = [];
	let currentMention = '';
	let isMentioning = false;

	if (text) {
		for (const char of text) {
			if (char === '@') {
				isMentioning = true;
			} else if (/[ ,.!?]/.test(char) && isMentioning) {
				mentions.push(currentMention);
				currentMention = '';
				isMentioning = false;
			} else if (isMentioning) {
				currentMention += char;
			}
		}
	}

	// Add the last mention if the bio/profile ends with a mention
	if (currentMention) {
		mentions.push(currentMention);
	}

	return mentions;
}
