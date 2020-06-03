export default {
  round (value, precision) {
    if(!precision) precision = 2
    const fac = Math.pow(10, precision)
    return Math.round(value * fac) / fac
  },

  random(minimum, maximum, rounded) {
    const random = minimum + Math.random() * (maximum - minimum)
    if(rounded) return this.round(random)
    else return random
  }
}
