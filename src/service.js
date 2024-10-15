class Service {
  // realizamos el constructor inicializando el array vacío
  constructor (name, ratings = []) {
    this.name = name
    this.ratings = ratings
  }
  // Método para añadir puntuaciones

  giveRating (rating) {
    return this.ratings.push(rating)
  }

  // Propiedad calculada, que redondea a 2 decimales
  get rating () {
    if (this.ratings.length === 0) {
      return 0
    }
    return Number((this.ratings.reduce((acumulator, rating) => acumulator + rating, 0) / this.ratings.length).toFixed(2))
  }
}
module.exports = Service
