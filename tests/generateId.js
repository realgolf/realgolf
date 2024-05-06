function generateRandomId() {
	return Math.random().toString(36).slice(2);
}

/**
 * @param {{ (): string; (): any; }} generateId
 */
function findDuplicateId(generateId, maxIterations = 1) {
	console.time('findDuplicateId');
	const ids = new Set();
	let duplicateId = null;
	let count = 0;

	while (duplicateId === null && count < maxIterations) {
		const id = generateId();
		if (ids.has(id)) {
			duplicateId = id;
		} else {
			ids.add(id);
			console.log('New ID: ' + id);
		}
		count++;
	}

	if (duplicateId !== null) {
		console.log(`Generated ${count} IDs before finding a duplicate.`);
		console.log(`The duplicate ID is ${duplicateId}.`);
	} else {
		console.log(`Generated ${count} IDs without finding a duplicate.`);
	}
	console.timeEnd('findDuplicateId');
}

// Use either generateRandomId or generateUuid
findDuplicateId(generateRandomId);
