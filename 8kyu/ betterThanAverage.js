function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce((acc, el) => acc+ el) / classPoints.length < yourPoints ? true : false
  }