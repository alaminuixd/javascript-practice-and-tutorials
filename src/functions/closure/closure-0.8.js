/* ***************************************
 *************** Closure setp 1 ***********
 ******************************************/
const processFetchedData = () => {
  // "myData" is from "processFetchedData()" parent function, but it doesn't have access to it.
  const myData = "Here is my data";
  // We will return "myData" inside the child function "handleData()"
  // In another word "handleData()" will have a backpack that contain value of "myData" which is a closure
  const handleData = () => {
    // As we returned it in here the value of "myData" is inside this function backpack.
    return myData;
  };
  return handleData;
};

const handleData = processFetchedData();
console.log(handleData());

/* ***************************************
 *************** Closure setp 2 ***********
 ******************************************/
const processFetchedData2 = (url) => {
  const handleData2 = () => {
    return url;
  };
  return handleData2;
};
console.log(processFetchedData2("I am the URL")); // Result: () => { return url; }
const handleData2 = processFetchedData2("I am the URL");
console.log(handleData2()); // result: I am the URL

/* ***************************************
 *************** Closure setp 3 ***********
 ******************************************/
const processFetchedData3 = (url) => {
  const handleData3 = () => {
    return url;
  };
  fetchData(handleData3); // return in another function
};
const fetchData = (callback) => {
  return callback("I am the URL");
};
