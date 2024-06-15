function getIphone(score) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      score.forEach((sub) => {
        if (sub >= 80) {
          res("Congratulation! You have achived the desire result.");
        } else {
          rej("Your score is lower than it need to be");
        }
      });
    }, 3000);
  });
}

const proIphone = getIphone([80, 90, 87, 92]);

proIphone
  .then((success) => console.log(success))
  .catch((failed) => console.log(failed));
