const fetchData = (url, callback) => {
  setTimeout(() => {
    fetch(url)
      .then((response) => response.json()) // Extract JSON data from response
      .then((data) => {
        callback(data); // here executing the function "handleData"
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, 1000);
};

const processData = (data) => {
  console.log(data);
};

const fetchDataProcess = (url) => {
  // this will be false before fatching data 1000ms or 1 second as "loading = false" happens in 500ms or 0.5s
  let loading = true;
  const handleData = (data) => {
    //"loading" will be false before executing "handleData" function
    //loading ? console.log("Data is still loading") : processData(data);
    if (loading) {
      console.log("Data is still loading");
    } else {
      processData(data);
    }
  };
  fetchData(url, handleData);
  setTimeout(() => {
    loading = false;
  }, 500);
};
fetchDataProcess("https://jsonplaceholder.typicode.com/users");
