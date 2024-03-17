const checkType = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    console.log("Something else");
  } else {
    if (Array.isArray(obj)) {
      console.log("Array");
    } else {
      console.log("Object");
    }
  }
};
