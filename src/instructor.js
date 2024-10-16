const Activity = require("./activity")

class Instructor {
  #basicSalary
  ledActivities = []
  constructor (name, basicSalary = 500) {
    this.name = name
    this.#basicSalary = basicSalary
  }

  get salary () {
    return this.#basicSalary + this.ledActivities.reduce((t, a) => t + 100 + 5 * a.assistance, 0)
  }

  lead (activity) {
    if (activity instanceof Activity) {
      // eslint-disable-next-line no-param-reassign
      activity.instructor = this
      this.ledActivities.push(activity)
    }
  }
}
module.exports = Instructor
