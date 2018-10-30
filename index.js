function produceDrivingRange(blockRange){
  return function (startHere, endHere) {
    let start = parseInt(startHere);
    let end = parseInt(endHere);
    let distanceToTravel = Math.abs(end - start);
    let difference = blockRange - distanceToTravel;

    if( difference > 0) {
        return `within range by ${difference}`
    } else {
        return `${Math.abs(difference)} blocks out of range`
    };
  };
}

function produceTipCalculator(percentage){
  return function(fare) {
    return fare*percentage;
  };
}

function createDriver(){
  let driverId = 0
  return class {
    constructor(name){
      this.id = ++driverId
      this.name = name
    }
  }
}
