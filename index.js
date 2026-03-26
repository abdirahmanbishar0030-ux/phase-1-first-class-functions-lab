// Code your solution in this file!
// 1. Return first two drivers
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

// 2. Return last two drivers
function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

// 3. Array of functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Higher-order function that returns another function
function createFareMultiplier(multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
}

// 5. Doubler function
const fareDoubler = createFareMultiplier(2);

// 6. Tripler function
const fareTripler = createFareMultiplier(3);

// 7. Function that uses another function as argument
function selectDifferentDrivers(arrayOfDrivers, driverFunction) {
  return driverFunction(arrayOfDrivers);
}