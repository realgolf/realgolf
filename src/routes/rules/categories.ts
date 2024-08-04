type RuleSet = {
	title: string;
	rules: {
		id: string;
		title: string;
	}[];
};

type Definitions = {
	id: string;
	title: string;
};

export const die_grundlagen_des_spiels: RuleSet = {
	title: 'I. Die Grundlagen des Spiels',
	rules: [
		{
			id: '66ac9e18ebc31cf9da8673ab',
			title: 'Regel 1 - Das Spiel, Verhalten der Spieler und die Regeln'
		},
		{
			id: '66acc29812ab7a2466925f0c',
			title: 'Regel 2 - Der Platz'
		},
		{
			id: '66acce0d1582e23e18d7efae',
			title: 'Regel 3 - Das Turnier'
		},
		{
			id: '66acce6c51c3ad9bc9d0023d',
			title: 'Regel 4 - Ausrüstung des Spielers'
		}
	]
};

export const spielen_der_runde_und_eines_loches: RuleSet = {
	title: 'II. Spielen der Runde und eines Loches',
	rules: [
		{
			id: '66acce86026bec4d1e8d1867',
			title: 'Regel 5 - Spielen der Runde'
		},
		{
			id: '66acce99d39059c0e0a93ca2',
			title: 'Regel 6 - Spielen eines Lochs'
		}
	]
};

export const spielen_des_balls: RuleSet = {
	title: 'III. Spielen des Balls',
	rules: [
		{
			id: '66acceafb8f2063e21e36b70',
			title: 'Regel 7 - Ballsuchen, Finden und Identifizieren des Balls'
		},
		{
			id: '66accec67c2dd226369a5c7f',
			title: 'Regel 8 - Den Platz spielen, wie er vorgefunden wird'
		},
		{
			id: '66accee40a5e68ffb0c916f5',
			title: 'Regel 9 - Ball spielen, wie er liegt, ruhenden Ball aufgenommen oder bewegt'
		},
		{
			id: '66accef7fd1930d7d136e44f',
			title:
				'Regel 10 - Auf einen Schlag vorbereiten und diesen ausführen, Beratung und Hilfe, Caddies'
		},
		{
			id: '66accf11d173a64a0c2baf51',
			title:
				'Regel 11 - Sich bewegender Ball trifft versehentlich Person, Tier oder Gegenstand: absichtliche Handlungen, um einen sich bewegenden Ball zu beeinflussen'
		}
	]
};

export const sonderregeln_fuer_bunker_und_gruens: RuleSet = {
	title: 'IV. Sonderregeln für Bunker und Grüns',
	rules: [
		{
			id: '66accf2d3c599ae5d8afe26b',
			title: 'Regel 12 - Bunker'
		},
		{
			id: '66accf3f1a0c69b6af9f90b6',
			title: 'Regel 13 - Grüns'
		}
	]
};

export const ball_aufnehmen_und_ins_spiel_zurueckbringen: RuleSet = {
	title: 'V. Ball aufnehmen und ins Spiel zurückbringen',
	rules: [
		{
			id: '66accf57231cc7cd1508f9b7',
			title:
				'Regel 14 - Vorgehensweisen mit dem Ball: Markieren, Aufnehmen und Reinigen; an Stelle zurücklegen; Droppen im Erleichterungsbereich; Spielen vom falschen Ort'
		}
	]
};

export const straflose_erleichterung: RuleSet = {
	title: 'VI. Straflose Erleichterung',
	rules: [
		{
			id: '66accf68dd4f200b9daef9e9',
			title:
				'Regel 15 - Erleichterung von losen hinderlichen Naturstoffen und beweglichen Hemmnissen (einschließlich Ball oder Ballmarker, die das Spiel unterstützen oder beeinträchtigen)'
		},
		{
			id: '66accf7a4dd7ebdd2cda4964',
			title:
				'Regel 16 - Erleichterung von ungewöhnlichen Platzverhältnissen (einschließlich unbeweglicher Hemmnisse), Gefährdung durch Tiere, eingebetteter Ball'
		}
	]
};

export const erleichterung_mit_strafe: RuleSet = {
	title: 'VII. Erleichterung mit Strafe',
	rules: [
		{
			id: '66accf8c825dd48ece42c5fc',
			title: 'Regel 17 - Penalty Areas'
		},
		{
			id: '66accfa7e1c0869c9e79c0e6',
			title:
				'Regel 18 - Erleichterung mit Strafe von Schlag und Distanzverlust, Ball verloren oder Aus, provisorischer Ball'
		},
		{
			id: '66accfbcd16174007a1e1cc0',
			title: 'Regel 19 - Ball unspielbar'
		}
	]
};

export const vorgehensweise_fuer_die_spieler_und_die_spielleitung_bei_strittigen_faellen_der_regelanwendung: RuleSet =
	{
		title:
			'VIII. Vorgehensweise für die Spieler und die Spielleitung bei strittigen Fällen der Regelanwendung',
		rules: [
			{
				id: '66accfd0bf00a34097f94403',
				title:
					'Regel 20 - Entscheidungen von strittigen Regelfällen während der Runde: Regelentscheidungen durch den Referee und die Spielleitung'
			}
		]
	};

export const andere_spielformen: RuleSet = {
	title: 'IX. Andere Spielformen',
	rules: [
		{
			id: '66accfe8c196818f233c1645',
			title: 'Regel 21 - Andere Formen des Einzel-Zählspiels und Einzel-Lochspiels'
		},
		{
			id: '66acf4798cbb9f736e24a0b7',
			title: 'Regel 22 - Vierer'
		},
		{
			id: '66acf4bfed621b4220e86248',
			title: 'Regel 23 - Vierball'
		},
		{
			id: '66acf4e4a5eccaef83d35de5',
			title: 'Regel 24 - Mannschaftsturniere'
		}
	]
};

export const definitionen: Definitions = {
	id: '66acf50eca8ad16ae4c77a70',
	title: 'X. Definitionen'
};
