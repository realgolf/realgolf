import { Social, modify_social } from '../../../../src/lib/scripts/Public/modify_socials';

describe('modify_social', () => {
	it('should return an empty array when socials is undefined', () => {
		const socials = undefined as unknown as Social[];
		const result = modify_social(socials);
		expect(result).toEqual([]);
	});

	it('should return an empty array when socials is an empty array', () => {
		const socials: Social[] = [];
		const result = modify_social(socials);
		expect(result).toEqual([]);
	});

	it('should match social links and extract usernames correctly', () => {
		const socials = [
			'https://twitter.com/johndoe',
			'https://lichess.org/@/johndoe',
			'https://chess.com/members/johndoe',
			'https://instagram.com/johndoe'
		];

		const result = modify_social(socials);
		expect(result).toEqual([
			{
				domain: 'https://twitter.com/*',
				link: 'https://twitter.com/johndoe',
				logo: {
					icon: [
						512,
						512,
						[],
						'e61b',
						'M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z'
					],
					iconName: 'x-twitter',
					prefix: 'fab'
				},
				username: 'johndoe'
			},
			{
				domain: 'https://lichess.org/@/*',
				link: 'https://lichess.org/@/johndoe',
				logo: {
					icon: [
						448,
						512,
						[9822],
						'f441',
						'M96 48L82.7 61.3C70.7 73.3 64 89.5 64 106.5V238.9c0 10.7 5.3 20.7 14.2 26.6l10.6 7c14.3 9.6 32.7 10.7 48.1 3l3.2-1.6c2.6-1.3 5-2.8 7.3-4.5l49.4-37c6.6-5 15.7-5 22.3 0c10.2 7.7 9.9 23.1-.7 30.3L90.4 350C73.9 361.3 64 380 64 400H384l28.9-159c2.1-11.3 3.1-22.8 3.1-34.3V192C416 86 330 0 224 0H83.8C72.9 0 64 8.9 64 19.8c0 7.5 4.2 14.3 10.9 17.7L96 48zm24 68a20 20 0 1 1 40 0 20 20 0 1 1 -40 0zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H409.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L384 432H64L22.6 473.4z'
					],
					iconName: 'chess-knight',
					prefix: 'fas'
				},
				username: 'johndoe'
			},
			{
				domain: 'https://chess.com/members/*',
				link: 'https://chess.com/members/johndoe',
				logo: {
					icon: [
						512,
						512,
						[],
						'f439',
						'M144 16c0-8.8-7.2-16-16-16s-16 7.2-16 16V32H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h16V96H60.2C49.1 96 40 105.1 40 116.2c0 2.5 .5 4.9 1.3 7.3L73.8 208H72c-13.3 0-24 10.7-24 24s10.7 24 24 24h4L60 384H196L180 256h4c13.3 0 24-10.7 24-24s-10.7-24-24-24h-1.8l32.5-84.5c.9-2.3 1.3-4.8 1.3-7.3c0-11.2-9.1-20.2-20.2-20.2H144V64h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H144V16zM48 416L4.8 473.6C1.7 477.8 0 482.8 0 488c0 13.3 10.7 24 24 24H232c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L208 416H48zm288 0l-43.2 57.6c-3.1 4.2-4.8 9.2-4.8 14.4c0 13.3 10.7 24 24 24H488c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L464 416H336zM304 208v51.9c0 7.8 2.8 15.3 8 21.1L339.2 312 337 384H462.5l-3.3-72 28.3-30.8c5.4-5.9 8.5-13.6 8.5-21.7V208c0-8.8-7.2-16-16-16H464c-8.8 0-16 7.2-16 16v16H424V208c0-8.8-7.2-16-16-16H392c-8.8 0-16 7.2-16 16v16H352V208c0-8.8-7.2-16-16-16H320c-8.8 0-16 7.2-16 16zm80 96c0-8.8 7.2-16 16-16s16 7.2 16 16v32H384V304z'
					],
					iconName: 'chess',
					prefix: 'fas'
				},
				username: 'johndoe'
			},
			{
				domain: 'https://instagram.com/*',
				link: 'https://instagram.com/johndoe',
				logo: {
					icon: [
						448,
						512,
						[],
						'f16d',
						'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
					],
					iconName: 'instagram',
					prefix: 'fab'
				},
				username: 'johndoe'
			}
		]);
	});

	it('should handle unmatched social links correctly', () => {
		const socials = ['https://tiktok.com/johndoe', 'https://bitbucket.com/johndoe'];

		const result = modify_social(socials);
		expect(result).toEqual([
			{
				domain: 'https://tiktok.com/johndoe',
				link: 'https://tiktok.com/johndoe',
				logo: undefined,
				username: 'https://tiktok.com/johndoe'
			},
			{
				domain: 'https://bitbucket.com/johndoe',
				link: 'https://bitbucket.com/johndoe',
				logo: undefined,
				username: 'https://bitbucket.com/johndoe'
			}
		]);
	});
});
