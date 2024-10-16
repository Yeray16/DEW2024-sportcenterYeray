const Activity = require('./activity')
const Facility = require('./facility')
const Instructor = require('./instructor')
const Service = require('./service')

class SportCenter {
  #services = []
  #instructors = []

  constructor (name, fee = 0, membership = 0) {
    if (name !== undefined) {
      this.name = name
      this.fee = fee
      this.membership = membership
    }
  }

  income () {
    return this.fee * this.membership
  }

  getServices () {
    return this.#services
  }

  addService (...services) {
    for (let i = 0; i < services.length; i++) {
      const service = services[i]
      if (service instanceof Service && !this.#services.includes(service)) this.#services.push(service)
    }
  }

  removeService (service) {
    if (this.#services.includes(service)) {
      this.#services = this.#services.filter(s => s !== service)
    }
  }

  getFacilities () {
    return this.#services.filter((s) => s instanceof Facility)
  }

  getActivities () {
    return this.#services.filter((s) => s instanceof Activity)
  }

  orderServicesBy (order) {
    switch(order){
      case 'name': this.#services.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1))
        break
      case 'rating': this.#services.sort((a, b) => (a.rating > b.rating ? -1 : 1))
        break
      default : break
    }
  }

  getInstructors () {
    return this.#instructors
  }

  addInstructor (instructor) {
    if (instructor instanceof Instructor && !this.#instructors.includes(instructor)) this.#instructors.push(instructor)
  }

  removeInstructor (instructor) {
    this.#instructors = this.#instructors.filter(s => s !== instructor)
  }

  listInstructorsActivities () {
    return this.#instructors.map((i) => [i.name, ...i.ledActivities.map((a) => a.name)])
  }

  costServices () {
    return this.#services.reduce((accumulate, service) => accumulate + service.calculateCost(), 0)
  }

  costInstructors () {
    return this.#instructors.reduce((a, i) => a + i.salary, 0)
  }
}
module.exports = SportCenter
