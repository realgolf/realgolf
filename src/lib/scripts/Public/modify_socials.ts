import type { PageData } from '../../../routes/[name]/$types';
import type { matchedSocials } from '../../types/matched_socials';
import { social_links } from '../social_links';

/**
 * Modify the social links to only display the username and logo and not the full URL
 * @param {PageData} data
 * @returns {matchedSocials[]} matchedSocials
 */
export function modify_social(data: PageData) {
	const socials = data.socials;
	const matchedSocials: matchedSocials[] = [];

	if (socials) {
		socials.forEach((social: string) => {
			let matched = false;
			for (const social_link of social_links) {
				// Escape the wildcard character '*' in the regular expression
				const pattern = new RegExp('^' + social_link.domain.replace(/\*/g, '.*'));
				if (pattern.test(social)) {
					matched = true;
					const url = new URL(social);
					let username;

					// Check for Lichess and Chess.com special cases
					if (social_link.domain === 'https://lichess.org/@/*') {
						username = url.pathname.split('@/')[1]; // Get the part after '@/'
					} else if (social_link.domain === 'https://chess.com/members/*') {
						username = url.pathname.split('/')[2]; // Get the part after 'members/'
					} else {
						username = url.pathname.substring(1); // Remove the leading slash
					}

					matchedSocials.push({
						link: social,
						domain: social_link.domain,
						logo: social_link.logo,
						username: username // Add the username to the object
					});
					break; // Break out of the loop once we find a match
				}
			}
			if (!matched) {
				matchedSocials.push({
					link: social,
					domain: social,
					logo: undefined,
					username: social
				});
			}
		});
	}

	return matchedSocials;
}
