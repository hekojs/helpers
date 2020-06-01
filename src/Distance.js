export default {
  fromPointToPoint (fromX, fromY, toX, toY) {
    return Math.abs(fromX - toX) + Math.abs(fromY - toY)
  }
}
