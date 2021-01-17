function slove(speed, area) {
    let limit = 0;
  
    switch (area) {
      case "motorway":
        limit = 130;
        break;
      case "interstate":
        limit = 90;
        break;
      case "interstate":
        limit = 90;
        break;
      case "city":
        limit = 50;
        break;
      case "residential":
        limit = 20;
        break;
  
      default:
        break;
    }
  
    const speeding = speed - limit;
  
    if (speeding <= 0) {
      return `Driving ${speed} km/h in a ${limit} zone`;
    }
  
    let status = "";
  
    if (speeding <= 20) {
      status = "speeding";
    } else if (speeding >= 20 && speeding <= 40) {
      status = "excessive speeding";
    } else {
      status = "reckless driving";
    }
  
    return `The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status}`;
  }
  
  // console.log(slove(40, 'city'));
  // console.log(slove(21, 'residential'));
  // console.log(slove(120, 'interstate'));
  // console.log(slove(200, 'motorway'));
  