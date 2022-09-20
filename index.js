const { compare } = require("resemblejs");
const { join } = require("path")

const compareFiles = (left, right, title) => {
  compare(join(__dirname, left), join(__dirname, right), (err, data) => {
    console.log({ msg: title });
    if (err) {
      console.log({ err });
    } else {
      console.log({ data });
    }
  });
}

compareFiles("img/white.png", "img/black.png", "white vs black");
compareFiles("img/white.png", "img/white.png", "white vs white");
