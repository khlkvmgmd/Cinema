function findLatestWeight(weights) {
    for(let i = weights.length-1; i >= 0; i--){
        if (i === 0) {
          return weights[0]
        } 
          
        weights.sort();
        weights[i-1] =  weights[i] - weights[i-1]
        weights.pop()    
    }
  }
module.exports = findLatestWeight;
