function permAlone(str) {
    // spit the word into single character exp: ["aab"] > ["a", "a", "b"]
    const arr = str.split("");
    //console.log(arr)
    
    //heap algorithm permutation
    //swap the position of the letter by index
    let output = [];
      const swapInPlace = (arrToSwap, indexA, indexB) => {
        const temp = arrToSwap[indexA];
        arrToSwap[indexA] = arrToSwap[indexB];
        arrToSwap[indexB] = temp;
      };
    
    //when n get 1 push the order into output array. otherwise n - 1; n = arr.length, heapArr = arr.slice()
    const generate = (n, heapArr) => {
      if (n === 1){
        output.push(heapArr.slice());
        return;
      }
    generate(n - 1, heapArr);
    
    for (let i = 0; i < n - 1; i++){
      if (n % 2 === 0){
        swapInPlace(heapArr, i, n - 1);
      } else {
        swapInPlace(heapArr, 0, n - 1);
      }
      generate(n - 1, heapArr);
    }
    
    };
    
    //arr.slice() > it will not modify the original arr. 
    generate(arr.length, arr.slice());
    
    //move each possible orders in each array
    let mergedOutput = [];
    for (let i = 0; i < output.length; i++){
      mergedOutput.push(output[i])
    }
    //console.log(mergedOutput)
    
    //if arr = ["a"] > result = 1
    let resArr = [];
    if (mergedOutput.length === 1){
    resArr.push(mergedOutput)
    }
    
    //check if there are same letter next to each other
    let result;
    mergedOutput.forEach(ele => {
    for (let i = 0; i < ele.length - 1; i++){
      if (ele[i] === ele [i + 1]){
       return result = false
      } else {
        result = true
      } 
    }
    
    if (result == true){
      resArr.push(ele)
      }
    })
    console.log(resArr)
    
    let answerNum = resArr.length;
    
    console.log(answerNum)
    
    return answerNum;
    
    }
    
    //permAlone('aab');