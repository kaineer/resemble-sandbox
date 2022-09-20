const { compare } = require("resemblejs");
const { join } = require("path")
const { writeFileSync } = require("fs")

const compareFiles = (left, right, title) => {
  compare(join(__dirname, left), join(__dirname, right), (err, data) => {
    console.log({ msg: title });
    if (err) {
      console.log({ err });
    } else {
      console.log({ data });
      writeFileSync(join(__dirname, "img/diff.png"), data.getBuffer());
    }
  });
}

compareFiles("img/white.png", "img/black.png", "white vs black");

