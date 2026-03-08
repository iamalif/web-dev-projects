function waitingTime(vivaDoneArray, serialNumber) {
    let totalCandidateTime = 0;
    if (Array.isArray(vivaDoneArray) !== true || typeof serialNumber !== 'number') {
        return 'Invalid Input';
    }
    else {
        for (const candidateTime of vivaDoneArray) {
            totalCandidateTime = totalCandidateTime + candidateTime;
        }
        const averageCandidateTime = Math.round(totalCandidateTime / vivaDoneArray.length);
        // const nextCandidates = (serialNumber-1) - vivaDoneArray.length;
        // const totalWaitingTime = totalCandidateTime + nextCandidates*averageCandidateTime;
        const totalWaitingTime = averageCandidateTime * ((serialNumber - 1) - vivaDoneArray.length);
        return totalWaitingTime;

    }
}

console.log(waitingTime([13, 2, 6, 7, 10], 6));