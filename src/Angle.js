export default {
  toRadian (angle) {
    return angle * (Math.PI / 180)
  },

  toDeegree (radianAngle) {
    return radianAngle * (180 / Math.PI)
  },

  difference (facingAngle, testAngle) {
    const difference = this.toRelativeAngle(facingAngle, testAngle)
    if (difference > 180) {
      return (180 - (difference - 180)) * -1
    } else {
      return difference
    }
  },

  toRelativeAngle (facingAngle, testAngle) {
    return this.normalize(this.normalize(testAngle) - this.normalize(facingAngle))
  },

  isOnRight (facingAngle, testAngle) {
    return this.toRelativeAngle(testAngle - facingAngle) < 180
  },

  isOnLeft (facingAngle, testAngle) {
    return !this.isOnRight(facingAngle, testAngle)
  },

  normalize (angle) {
    if (angle >= 360) angle -= 360
    if (angle < 0) angle += 360
    return angle
  },

  fromPointToPoint (fromX, fromY, toX, toY) {
    return this.toDeegree(Math.atan2(toY - fromY, toX - fromX))
  }
}
