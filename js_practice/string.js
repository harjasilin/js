//1.reverse string

function rev(a){
return a.split('').reverse().join('')
}
// console.log(rev('Hello world World'))


//2.pallidrone or not

function pali(a){
if(a===a.split('').reverse().join('')){
    return true
}else{
    return false
}
}
// console.log(pali('helleh'))


//3.reverse without method

function rev2(str){
    let rev='';
    for(let i=str.length-1;i>=0;i--){
        rev=rev+str[i]
    }
    return rev
}
// console.log(rev2('Hello world World'))

//4.palli without method
function pali2(a){
let rev=''
for(let i=a.length-1;i>=0;i--){
    rev=rev+a[i]
    
}
// return rev
if(a==rev){
    return true
}else{
   return false
}
}
console.log(pali2('oheleh'))