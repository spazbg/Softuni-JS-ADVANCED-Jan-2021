function slove(steps, footprint, speedKmH) {
    const speed = (speedKmH * 1000) / 3600;
    const distance = steps * footprint;
  
    const rests = Math.floor(distance / 500) * 60;
    let timeInSeconds = distance / speed + rests;
  
    const hours = Math.floor(timeInSeconds / 3600)
      .toFixed(0)
      .padStart(2, "0");
    timeInSeconds = timeInSeconds % 3600;
    const minutes = Math.floor(timeInSeconds / 60)
      .toFixed(0)
      .padStart(2, "0");
    const seconds = (timeInSeconds % 60).toFixed(0).padStart(2, "0");
  
    return `${hours}:${minutes}:${seconds}`;
  }
  
  // console.log(slove(4000, 0.6, 5));
  // console.log(slove(2564, 0.7, 5.5));