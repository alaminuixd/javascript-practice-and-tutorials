const requestData = (receivedURL, callback) => {
  const dataArray = [...receivedURL];
  return callback(dataArray);
};

function processReceivedData(url) {
  const handleData = () => {
    return url;
  };
  requestData();
}
const handleData = processReceivedData("This is my URL");
console.log(handleData());
