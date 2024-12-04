function sunsetViews(buildings, direction) {
  const buildingsWithViews = [];

  let startId = direction === "WEST" ? 0 : buildings.length - 1;
  let step = direction === "WEST" ? 1 : -1;

  let runningHeight = 0;
  while (startId >= 0 && startId < buildings.length) {
    const buildingHeight = buildings[startId];
    if (buildingHeight > runningHeight) {
      buildingsWithViews.push(startId);
    }
    runningHeight = Math.max(runningHeight, buildingHeight);
    startId = startId + step;
  }
  if (direction == "EAST") buildingsWithViews.reverse();

  return buildingsWithViews;
}
