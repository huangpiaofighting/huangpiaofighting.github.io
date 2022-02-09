> 合并二维有序数组成一维有序数组，归并排序的思路

## answer

```js
/**
 * 解题思路：
 * 双指针 从头到尾比较 两个数组的第一个值，根据值的大小依次插入到新的数组中
 * 空间复杂度：O(m + n)
 * 时间复杂度：O(m + n)
 * @param {Array} arr1
 * @param {Array} arr2
 */

function　merge(arr1, arr2){
    var　result=[];
    while(arr1.length>0 && arr2.length>0){
        if(arr1[0]<arr2[0]){
              /*shift()方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。*/
            result.push(arr1.shift());
        }else{
            result.push(arr2.shift());
        }
    }
    return　result.concat(arr1).concat(arr2);
}

function mergeSort(arr){
    let lengthArr = arr.length;
    if(lengthArr === 0){
     return [];
    }
    while(arr.length > 1){
     let arrayItem1 = arr.shift();
     let arrayItem2 = arr.shift();
     let mergeArr = merge(arrayItem1, arrayItem2);
     arr.push(mergeArr);
    }
    return arr[0];
}
let arr1 = [[1,2,3],[4,5,6],[7,8,9],[1,2,3],[4,5,6]];
let arr2 = [[1,4,6],[7,8,10],[2,6,9],[3,7,13],[1,5,12]];
mergeSort(arr1);
mergeSort(arr2);
```

## myself

```js
function M_mergeArr(pamaArr) {
  let arr = []
  pamaArr.forEach(item => {
    arr = [...arr, ...item]
  })
  function sort(fn, arr) {
    //用一个冒泡排序法
    for (let i = 0; i < arr.length -1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (fn(arr[j], arr[j + 1])> 0 ) {
          let t = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = t
        }
      }
    }
    return arr
  }
  arr = sort((a, b) => a - b, arr)
  // arr = arr.sort((a,b)=>a-b)  //sort 返回的是大于0升序，小于0降序 ，题目是那你写sort
  return arr
}

let arr = M_mergeArr([ 
  [1, 2, 3],
  [2, 3],
  [3, 4, 5],
])
console.log('arr--', arr)
```

