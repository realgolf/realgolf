import type { GolfRoundCourse } from './GolfRoundCourse';
import type { GolfRoundHole } from './GolfRoundHole';
import type { GolfRoundOverallStatistics } from './GolfRoundOverallStatistics';
import type { GolfRoundRoundInfo } from './GolfRoundRoundInfo';

export interface GolfRound {
	id: string;
	course: GolfRoundCourse;
	roundInfo: GolfRoundRoundInfo;
	holeByHoleData: GolfRoundHole[];
	overallStatistics: GolfRoundOverallStatistics;
}
