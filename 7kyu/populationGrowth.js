function nbYear(p0, percent, aug, p) {
    p0 =  Math.floor(p0*(1+percent/100)+aug)
    if (p0>=p)
       return 1
    return nbYear(p0,percent,aug,p)+1
  }