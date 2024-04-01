function generateArray(value1,value2){
    let arr = [];//print if condtion is true
    for(let i = value1; i <= value2; i++){//if not arr should be blank
      arr.push(i);
    }
    return arr;
  }
  console.log (generateArray(-9,7))