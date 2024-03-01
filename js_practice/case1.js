// 1.Add 2 number

const Add=(a,b)=>{
    return a+b
}
// console.log(Add(2,3))

// 2.Add so many number
 const Add2=(...args)=>{
    return args.reduce((a,b)=>a+b,0)
 }
//  console.log(Add2(1,2,3,4))

// 3.Add number in array 
 const Add3=(...args)=>{
    return args.reduce((a,b)=>a+b,0)
 }
 const arr3=[1,2,3]
//  console.log(Add2(...arr3))

//4. without using method for so many number
const Add4=(...args)=>{
 let sum=0;
 for(let i=0;i<args.length;i++){
    sum= sum+args[i]
 }
 return sum;
}
console.log(Add4(1,2,3))

// 5.In array
const arr4=[1,2,3]
console.log(Add4(...arr4))

