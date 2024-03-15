// 1.what is env file ?
//In React Native, the .env file is used to store environment variables. Environment variables are values that can be accessed globally
// within your application and are typically used to store sensitive or configuration - specific data such as API keys, database URLs,
//or other settings that may vary between development, staging, and production environments.

// 2.what is background and foreground
// Foreground:
// In React Native, the "foreground" typically refers to the state when the application is actively running and visible to the user.
// When the application is in the foreground, the user can interact with its UI components, navigate between screens, and perform various actions.
// Background:
// Conversely, "background" refers to the state when the application is not actively visible or in use by the user.
// This can happen when the user switches to another application, receives a phone call, or the device's screen is turned off.
// In the background state, the application may still be running, but certain activities may be paused or restricted to conserve resources and battery life.

//hybride application
// React Native itself is often described as a hybrid framework because it allows developers to write code in JavaScript and leverage React's 
// component-based architecture to build user interfaces. However, when people refer to hybrid applications in React Native, they are typically 
// referring to applications that combine React Native with other technologies to access device features or to share code between multiple platforms.
// Using WebViews,Using Third-Party Libraries,Using Platform-Specific Code


//deep copy and shallow copy
// const person=
//     [{name:'abc',
//     age:30},
//    { name:'abchjj',
//     age:22},
//      {name:'abchhg',
//     age:24}
//     ]
// const user=JSON.parse(JSON.stringify(person))
// user.name='refds'
//  console.log(person.name)
//shalow:const person={
//     name:'abc',
//     age:20,add:{
//         city:'dscx'
//     }
// }
// const user={...person}
// console.log(user)

//call apply bind
// const app={
//     name:'name',age:'20'
// }

// function callThe(city){
//     console.log(this.name,this.age,city)
// }
// callThe.call(app,'abc')
// callThe.apply(app,['abc'])
// const data=callThe.bind(app)
// data('abc')


//life cycle method
//mounting,updating,unmounting

// diff bet filter and for each
//filter:create a new array over iterate and foreach will change the existing array itself.

//spread and rest operator
//both handle by ... spread to take all element inside the object and if we want to send n number of argument to one function
//we can use rest to give the access.

//hoisting in js

//optimize of app
//using pure component,memo,
//state colocation
//code splitting
//lazy loading
//Avoid memory leaks by unsubscribing from event listeners, clearing timeouts/intervals

//what is pure component
//A React component is considered pure if it renders the same output for the same state and props

//what is state and props

//control and uncontrol
// In controlled components, form input elements (like text inputs, checkboxes, etc.) are bound to the component's state.
// Changes to the input value trigger a change in the component's state, and the component re-renders with the updated value
// In uncontrolled components, form input elements are not directly controlled by React state.
// Instead, you rely on refs to access the input values when needed, typically after form submission or when the component is unmounted.

//props drilling

//template literal

//temporal dead zone

//what is native bridge

//what is state

//what is props

//what is diffing
//rn maintain a virtual dom which change according to the state of new props or state, when a component render it calculate the 
//previous state data and current state data,which figureout which node is need to chnage this state is called diffing

//what is usecallback and usememo what is diierence what is ues how to use

//what is useeffect

//event loop

//that is manifect file
//AndroidManifest.xml file contains important metadata about the Android app and specifies various settings, permissions, and components required for the app to run properly on the Android platform
//versionCode and versionName attributes

//thread
//flexbox
//how to create native module

//how js thread execute

//what is generator
//function that allows you to control the execution of the function using the yield keyword. 

//what is the latest version of redux saga
//1.3.0
//redux:5.0.1

//what is gradle why if is 2 and what are the work both
//app-level:This file is used to configure settings specific to the Android app module.
//It includes settings such as the app's application ID, version code, version name, build types, 
//product flavors, dependencies, and signing configurations.
//project-level:apply globally to the entire Android project

//what is depedency array why use

//in reducer we use one callback function why

//live reload and hot reload

//vertual dom

//What is Network Security and SSL Pinning  How is SSL pinning used in Mobile applications?

//how we store sensitive data in react native
//Android: Keystore, SharedPreferences with encryption, or libraries like EncryptedSharedPreferences.
//iOS: Keychain Services framework.

//How to debug React Native Applications and Name the Tools used for it

//prefomance issue

//test cases

//google map,notification,firebase,websocket,

//memory leak in rn
//Clean Up Timers and Subscriptions,Avoid Storing Large Data Sets in State,Profile and Monitor Memory Usage

//find the no of repeated character in string

//what is diff bt usecallback and clouser


//what is websocket how it work
//It enables bidirectional communication between clients (such as web browsers or mobile apps) and servers in real-time
//WebSocket is often used in applications that require low-latency and high-throughput communication, such as chat applications, real-time gaming, financial trading platforms, and live updating dashboards.


//how push notification is work how to send somw sepcific user to only
//firebase and apple push notification,react native push notification,

// diff bet redux and context api
//redux:global state in large-scale applications,provides a centralized store that holds the entire application state and follows a unidirectional data flow pattern
//supports middleware and enhancers, which allow developers to extend the functionality of the Redux store ,with additional features such as asynchronous actions, 
//logging, and time travel debugging (with tools like Redux DevTools).
//Context API: Context API is designed for managing local state or sharing state between closely related components in a component tree.
//passing props through every level.

//what is middle ware in redux
//Middleware provides a way to extend the functionality of Redux by allowing you to perform additional tasks such as logging, 
//asynchronous operations, routing, or state transformation.Middleware like redux-thunk or redux-saga allows you to dispatch asynchronous actions,
// such as making API requests or handling side effects, and dispatch additional actions based on the results.

//what is debug mode of react native
//React Native Debugger
//React Native DevTools
//Console Logging

//what is lazy loading
// Lazy loading allows you to load React components asynchronously, typically using dynamic import() statements. This means
//  that the code for a component is only loaded when it's needed, such as when the user navigates to a specific route or 
//  interacts with a particular feature.

//what is code splitting
//Code splitting is a powerful technique to optimize the performance of React applications. By splitting your code into 
// smaller chunks and loading them on-demand, you can significantly reduce load times and provide a better user experience.
//  React provides built-in tools like React.

//what is memoization
// Memoization is a programming technique used to optimize the performance of functions by caching the results of expensive
// function calls and returning the cached result when the same inputs occur again. This can significantly reduce redundant
//  computations, especially in functions with expensive calculations or repetitive operations











