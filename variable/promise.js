// console.log('one')

// setTimeout(()=>{
// console.log('hii')
// },2000)
// console.log('three')


// callback sync

// function sum (a,b){
//     console.log(a+b)
// }
// function cal(a,b,sumcall){
//     sumcall(a,b)
// }
// cal(1,2,sum)

//callback async

// function hello(){
//     console.log('hello')
// }
// const data=setInterval(hello,1000)

// setTimeout(()=>{
//     clearInterval(data)
// },10000)

// function getData(dataId,getNextData){
// setTimeout(()=>{
//     console.log('data',dataId)
//     if(getNextData){
//         getNextData()
//     }
    
// },2000)
// }
//callback hell
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3)
//     })
// })



//promise

let promise =new Promise((resolve,reject)=>{
console.log('hiii')
})


async function logMovies() {
    const response = await fetch("http://example.com/movies.json");
    const movies = await response.json();
    console.log(movies);
  }