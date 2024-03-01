
//1. find the max number
const Max=(...a)=>{
    return Math.max(...a)
}
//  console.log(Max(1,2,3,4))

//2. find the max in array
const Max2=(a)=>{
    return Math.max(...a)
}
// console.log(Max2([1,2,3,4]))

//3. using apply / bind 
 const max3=(a)=>{
    return Math.max.apply(null,a)
 }
//  console.log(max3([1,2,3,4]))

//4.without method
function large(arr){
    let i;
    let max=arr[0];
    for(i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max
}
// console.log(large([1,2,4]))

//5.using reduce

function MaxNum(a){
return a.reduce((a,b)=>a>b?a:b)
}
// console.log(MaxNum([1,2,4]))

//6.find second large no 
function secondLar(a){
  let c=a.sort((a,b)=>a-b)
  let b=new Set(c)
  let arr=Array.from(b)
  let arr2=arr.reverse()
  let first3=arr2.splice(0,3)
//    console.log(first3)
}
secondLar([1,6,2,3,4,4,3,8,9,10,11,12])


//7.without method
function secondLar2(a){
    let max=a[0]
    let max2=-Infinity
    for(i=0;i<a.length;i++){
        if(a[i]>max){
            max2=max;
            max=a[i]
        }else if (a[i] > max2 && a[i] !== max) {
            max2 = a[i];
        }
    }
    return max2
  }
//  console.log(secondLar2([1,6,2,3,4,4,3,8,9,10,11,12])) 




