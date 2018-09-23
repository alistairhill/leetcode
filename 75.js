/*
leetcode #75
Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
*/

const red = 0
const blue = 2

sortColors = (arr) => {
  let currentSplice

  for (var i = 0; i < arr.length; i++) {

    if (arr[i] === red) {

      currentSplice = arr.splice(i, 1)
      arr.unshift(currentSplice[0])
    } else if (arr[i] === blue) {

      currentSplice = arr.splice(i, 1)
      arr.push(currentSplice[0])
    }
  }

  return arr
}