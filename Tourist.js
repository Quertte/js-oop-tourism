
class Tourist {
  constructor(name, age, tours = []) {
    this.name = name;
    this.age = age;
    this.tours = tours;
  }

  buy(countryName, agency) {
    let tour = agency.tours.find(el => el.country === countryName);
    if (tour) {
      this.tours.push(tour);
      return true;
    }
    return false;
  }
}

module.exports = Tourist;
