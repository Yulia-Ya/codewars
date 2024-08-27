function points(games) {
    return games.map(el=> el[0] > el[2] ? 3 : el[0] === el[2] ? 1 :0).reduce((acc, cur) => acc + cur, 0)
   }
   console.log();