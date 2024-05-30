function MyPromise(cb) {
  let onResolve;
  let onReject;
  let isResolved = false;
  let isRejected = false;
  let value;
  let error;

  this.resolve = function (res) {
    isResolved = true;
    value = res;
    if (onResolve) {
      onResolve(res);
    }
  };

  this.reject = function (rej) {
    isRejected = true;
    error = rej;
    if (onReject) {
      onReject(rej);
    }
  };

  this.then = function (callback) {
    return new MyPromise((res, rej) => {
      onResolve = (value) => {
        try {
          const result = callback(value);
          if (result instanceof MyPromise) {
            result.then(res).catch(rej);
          } else {
            res(result);
          }
        } catch (e) {
          rej(e);
        }
      };
      if (isResolved) {
        onResolve(value);
      }
    });
  };

  this.catch = function (callback) {
    return new MyPromise((res, rej) => {
      onReject = (error) => {
        try {
          const result = callback(error);
          if (result instanceof MyPromise) {
            result.then(res).catch(rej);
          } else {
            res(result);
          }
        } catch (e) {
          rej(e);
        }
      };
      if (isRejected) {
        onReject(error);
      }
    });
  };

  // Execute the callback with resolve and reject functions
  try {
    cb(this.resolve, this.reject);
  } catch (e) {
    this.reject(e);
  }
}

// Example usage:
const p1 = new MyPromise((res, rej) => {
  setTimeout(() => {
    res("success");
  }, 1000);
});

p1.then((res) => {
  console.log(res); // Output after 1 second: success
  return "another success";
})
  .then((res) => {
    console.log(res); // Output: another success
  })
  .catch((rej) => {
    console.log(rej);
  });
