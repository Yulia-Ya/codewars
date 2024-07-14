function longest(s1, s2) {
    // your code
    const arr = []
  const combi = s1.concat(s2).split('').sort()
  
   combi.filter(el=> !arr.includes(el) ? arr.push(el) : [])
  return arr.join('')
  }