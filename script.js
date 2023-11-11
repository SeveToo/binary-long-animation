const BinaryNumbers = document.querySelector(".BinaryNumbers");

let OneThousandNumbers = [];
let numbersInDec = []; //512, 256...
let speed = 10;
let HowManyNumbersToGenerate = 1023; //1023 is Max

function numberRepresentationinDec(to) {
  let nr = 1;
  for (let i = 0; i < to; i++) {
    numbersInDec.unshift(nr);
    nr *= 2;
  }
}

numberRepresentationinDec(10);

function autoScroll() {
  BinaryNumbers.scrollTop += 3;
}

setInterval(autoScroll, speed * 2.3);

function convertDecToBinary(nr) {
  let binarySolutionTab = [];
  let binSolutionString = "";
  i = 0;
  while (i < 10) {
    binarySolutionTab.unshift(nr % 2);
    nr = (nr - (nr % 2)) / 2;
    i++;
  }
  for (let i = 0; i < 10; i++) {
    binSolutionString += binarySolutionTab[i];
  }
  return binarySolutionTab;
  // return binSolutionString;
}

let liczbaNr = 0;
function start() {
  liczbaNr == HowManyNumbersToGenerate && clearInterval(show);
  OneThousandNumbers[liczbaNr] = convertDecToBinary(liczbaNr);
  createBinaryRow(convertDecToBinary(liczbaNr), liczbaNr);
  liczbaNr++;
}
const show = setInterval(start, speed * 50);

// start();

// for (let i = 0; i <= 1023; i++) {
//   OneThousandNumbers[i] = convertDecToBinary(i);
//   // console.log(i + ". " + convertDecToBinary(i));
//   createBinaryRow(convertDecToBinary(i), i);
// }

function createBinaryRow(tab, nr) {
  let row = document.createElement("div");
  row.classList.add("binRow");
  row.classList.add("newBinRow");
  setInterval(() => {
    row.classList.remove("newBinRow");
  }, 400);
  for (let i = 0; i < 10; i++) {
    let dot = document.createElement("div");
    dot.classList.add("binDot");
    dot.textContent = numbersInDec[i];
    tab[i] && dot.classList.add("active");
    row.append(dot);
  }
  let inDec = document.createElement("div");
  inDec.classList.add("nrInDec");
  inDec.textContent = nr;
  row.append(inDec);
  BinaryNumbers.append(row);
}
// createBinaryRow([0, 0, 0, 0, 0, 0, 1, 0, 1, 0], 10);
