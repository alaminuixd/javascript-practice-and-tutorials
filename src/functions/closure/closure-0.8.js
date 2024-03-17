/* ***************************************
 *************** Closure 1 ***********
 ******************************************/
const processFetchedData1 = (url) => {
  // create a function that acts like a closure
  const handleData1 = (theURL) => {
    theURL = url;
    return theURL;
  };
  return handleData1;
};
const handleData1Func = processFetchedData1("I am the URL");
console.log(handleData1Func()); // Result: I am the URL

/* ***************************************
 *************** Closure 2 ***********
 ******************************************/
const processData2 = (callback) => {
  return callback();
};
const processFetchedData2 = () => {
  // create a function "handleData2" that acts like a closure
  const handleData2 = (theURL) => {
    return theURL;
  };
  // We could have returned the function handleData2 here;
  // But we will return it as a callback in another function called "processData2"
  processData2(handleData2);
};
const handleData2Func = processFetchedData2();
console.log(handleData2Func("I am the URL")); // Result: I am the URL
/* ***************************************
 *************** Closure 3 ***********
 ******************************************/
