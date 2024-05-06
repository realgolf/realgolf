import {
	faFacebook,
	faGithub,
	faInstagram,
	faLinkedin,
	faPinterest,
	faXTwitter,
	faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { faChess, faChessKnight } from '@fortawesome/free-solid-svg-icons';

/**
 * All social links that are supported by our software
 */
export const social_links = [
	{
		logo: faGithub,
		domain: 'https://github.com/*'
	},
	{
		logo: faYoutube,
		domain: 'https://youtube.com/*'
	},
	{
		logo: faInstagram,
		domain: 'https://instagram.com/*'
	},
	{
		logo: faFacebook,
		domain: 'https://facebook.com/*'
	},
	{
		logo: faPinterest,
		domain: 'https://pinterest.com/*'
	},
	{
		logo: faLinkedin,
		domain: 'https://linkedin.com/*'
	},
	{
		logo: faChess,
		domain: 'https://chess.com/members/*'
	},
	{
		logo: faChessKnight,
		domain: 'https://lichess.org/@/*'
	},
	{
		logo: faXTwitter,
		domain: 'https://x.com/*'
	},
	{
		logo: faXTwitter,
		domain: 'https://twitter.com/*'
	}
];
