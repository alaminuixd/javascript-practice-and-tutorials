const fetchData = (url, callback) => {
  // the "callback" will act like a closure in "fetchDataProcess" function wehre "callback" will be named "handleData"
  fetch(url)
    .then((response) => response.json()) // Extract JSON data from response
    .then((data) => {
      callback(data); // here executing the callback function "handleData"
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

const processData = (data) => {
  console.log(data);
};

const fetchDataProcess = (url) => {
  const handleData = (data) => {
    processData(data);
  };
  // "handleData" will never be executed unless we pass it in fetchData and that make it a closure:
  fetchData(url, handleData);
};
fetchDataProcess("https://jsonplaceholder.typicode.com/users");
