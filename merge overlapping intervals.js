function mergeOverlappingIntervals(array) {
  const sortedIntervals = array.sort((a, b) => a[0] - b[0]);
  const mergedIntervals = [];

  let currentInterval = sortedIntervals[0];
  mergedIntervals.push(currentInterval);

  for (const nextInterval of sortedIntervals) {
    const [_, currentIntervalEnd] = currentInterval;
    const [nextIntervalStart, nextIntervalEnd] = nextInterval;

    if (currentIntervalEnd >= nextIntervalStart) {
      currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
    } else {
      currentInterval = nextInterval;
      mergedIntervals.push(currentInterval);
    }
  }
  return mergedIntervals;
}
