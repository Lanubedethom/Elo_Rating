export const calculateElo = (winnerElo, loserElo) => {
    const k = 32;
    const probability = 1 / (1 + Math.pow(10, (loserElo - winnerElo) / 400));
    const newWinnerElo = Math.round(winnerElo + k * (1 - probability));
    const newLoserElo = Math.round(loserElo + k * (0 - probability));
    return { newWinnerElo, newLoserElo };
};


