export default class {
  constructor () {
    this.promise = null
  }

  working () {
    return this.promise !== null && this.promise.alive
  }

  create (callable, options) {
    const params = Object.assign({
      interval: null,
      once: false
    }, options)

    if (this.working()) {
      this.stop()
    }

    let res = null
    const promise = new Promise((resolve) => {
      res = resolve
    }).finally(() => {
      promise.alive = false
    })

    promise.alive = true
    promise.callable = callable
    promise.resolve = res

    promise.params = params
    promise.last = 0

    this.promise = promise

    return this.promise
  }

  stop () {
    if (this.promise) {
      this.promise.resolve()
    }

    return this
  }

  update ({ tps }) {
    if (this.promise && this.promise.alive) {
      if (this.promise.params.interval) {
        this.promise.last += 1000 / tps

        if (this.promise.last >= this.promise.params.interval) {
          this.promise.callable()
          this.promise.last = 0

          if (this.promise.params.once) {
            this.stop()
          }
        }
      } else {
        this.promise.callable()

        if (this.promise.params.once) {
          this.stop()
        }
      }
    }
  }
}
