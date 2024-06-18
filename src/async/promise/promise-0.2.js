function getIphone(score) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const passed = score.every((sub) => {
        sub >= 80;
      });
      if (passed) {
        res("Congratulation! You have achived the desire result.");
      } else {
        rej(new Error("Your score is lower than it need to be"));
      }
    }, 3000);
  });
}

const proIphone = getIphone([80, 90, 87, 92, 50]);

proIphone
  .then((success) => console.log(success))
  .catch((failed) => console.log(failed.message));
