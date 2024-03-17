const fetchData = (url, callback) => {
  return callback(url); // Invoke the callback with the url parameter
};

const processData = (data) => {
  console.log(data);
};

const fetchDataProcess = (urlData) => {
  // "hendleData(data)" function refers to the "callback(url)" in "fetchData(url, callback)" function.
  // "data" parameter refers to the "url" in "fetchData" function.
  const handleData = (data) => {
    processData(data);
  };
  // handleData finally executes in fetchData function as "return callback(url);"
  fetchData(urlData, handleData); // Pass handleData as the callback
};

fetchDataProcess("This is the URL Data");
