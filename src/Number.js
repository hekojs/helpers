export default {
  round (value, precision) {
    if(!precision) precision = 2
    const fac = Math.pow(10, precision)
    return Math.round(value * fac) / fac
  }
}
