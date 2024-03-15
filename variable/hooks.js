//hooks: React state and lifecycle features from function components
//useState: we are giving the functional component to dynamic touch without using the class here we taking 2 parameter
//         state and setstate ,the state is the current value and the setstate we are using to update the state when ever we required.

//useEffect:
//             Side rendering with asynchrnous way  we are taking 2 think here one is function and depedency
//            if we are giving the dep array the effect will render every time when the will load, it we give empty dep then it will render once and if 
//            giving dep then it will render according to the data change.useEffect also provides a mechanism for cleaning up after these side effects. 
//           This is especially important for avoiding memory leaks or other issues when the component is unmounted or when the dependencies change.
// useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCount(count => count + 1);
//     }, 1000);

//     // Cleanup function
//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);


//useRef: when the page is render and the current data is also rendering if we dont want to chnage the value,we can store it 
//     in  useref, we can access the proper and element inside the dom,Handling media, such as audio or video elements, 
//    through useRef is a common use case. You can use useRef to directly access the media element, control playback, 
//    and perform other operations imperatively. 


//usecontext: when we are passing props through parent to child when it goes to nested child we are facing the props drilling
//            issue to adoid this issue we can create the createContext() which we will send the props through provider and can get the value through 
//             useContext(), without passing the props.

//useReducer: when we are passing props through parent to child when it goes to nested child we are facing the props drilling
//            issue to adoid this issue we can also use the useReducer,it will work as the redux flow ,initially we are createing
//     the action and reducer, then where we want to use the data we can dispatch the data.

//create a inc and dec using the usereducer and useContext===

//useCallback: it return the memoirasider function which prevend the render according to change of function not the value,
   // so we create a function where it will remember the function and will not render .



//useMemo: when we are creating a componenet using usememo it will crate a cache of output upto when ever the value or the props
//are not changing .it will prevent the rerender.


//uselayouteffect:useLayoutEffect is similar to useEffect, but it fires synchronously after all DOM mutations. This can be 
//useful when you need to read layout from the DOM and then make DOM mutations based on that layout synchronously.

////custome hooks

  