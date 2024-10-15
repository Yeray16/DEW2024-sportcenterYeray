const Activity = require('./activity')
const Service = require('./service')

class SportCenter {
  #services = []
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
    return this.#services.filter(s => s instanceof Activity)
  }
}
module.exports = SportCenter
