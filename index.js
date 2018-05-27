// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0

class Neighborhood {
  constructor(name) {
    this.name = name;
    this.id = ++neighborhoodId;

    store.neighborhoods.push(this)
  }
  deliveries() {
    return store.deliveries.filter(delivery => delivery.neighborhoodId === this.id);
  }


  customers(){
    return store.customers.filter(customer => customer.neighborhoodId === this.id);
  }


  meals(){
    let meals = this.deliveries().map(delivery => delivery.meal());
    return meals.filter(function(meal, index, meals) {
      return meals.indexOf(meal) === index;
    });
  }
}

class 