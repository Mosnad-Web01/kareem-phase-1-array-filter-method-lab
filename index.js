// Code your solution here
function findMatching(drivers, string) {
  return drivers.filter(function (driver) {
    return driver.toLowerCase().includes(string.toLowerCase());
  })
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (driver) {
    return driver.toLowerCase().startsWith(string.toLowerCase());
  })
}

function matchName(drivers, string) {
  return drivers.filter(function (driver) {
    return driver.name.toLowerCase().includes(string.toLowerCase());
  })
}
