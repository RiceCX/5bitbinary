/**
 I hope you had fun translating everything by hand.

  Imagine not making a translator to do it for you
  
  lolw

  also did this in 20 minutes so L
 */
const characterList = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J:10,
    K:11,
    L:12,
    M:13,
    N:14,
    O:15,
    P:16,
    Q:17,
    R:18,
    S:19,
    T:20,
    U:21,
    V:22,
    W:23,
    X:24,
    Y:25,
    Z:26
  }


const input = document.getElementById('field');
const log = document.getElementById('binary');

input.addEventListener('input', updateValue);

const binput = document.getElementById("binaryfield");
const blog = document.getElementById('decode');

binput.addEventListener('input', updateDecode);

function updateDecode(e) {
  const txt = e.target.value;
  let decoded = [];
  if(hasWhiteSpace(txt)) {

    let splitBinaries = txt.split(" ");
    for(item of splitBinaries) {
      if(item == "00000") {
        decoded.push(" ");
        continue;
      }
      for (let key in characterList) {
        if(characterList[key] == parseInt(binaryAgent(item))) decoded.push(key);
      }
    }
  }
  console.log(decoded);
  blog.textContent = decoded.join("");
  decoded = [];
}

function updateValue(e) {
  let text = e.target.value.toLowerCase();

  let listOfAscii = [];
  for(char of text) {
    if(hasWhiteSpace(char)) {
      listOfAscii.push(33);
      continue;
    }
    for ( let key in characterList ) {
      if(key.toLowerCase() == char) {
        listOfAscii.push(characterList[key]);
        break;
      }
    }
  }
  let binaryCodes = [];
  listOfAscii.forEach(resolve);
    // clear reset
  listOfAscii = [];
  log.textContent = binaryCodes.join(" ").toLowerCase();
  binaryCodes = [];

  // util
function resolve(item, position) {
  if(item === 33) {
    return binaryCodes.push('00000')
  }
  console.log(item);
  let a = item;
  let b = [];
  for (var i = 0; i < 5; i++)
    b[i] = (a >> i) & 1;
    binaryCodes.push(b.reverse().join(""));
//  binaryCodes.push(parseInt(parseInt(((item >> position) & 1).toString(2)).toString().padEnd(5,0)));
  }
}

function binaryAgent(str) {

var binString = '';

str.split(' ').map(function(bin) {
    binString += parseInt(bin, 2);
  });
return binString;
}
function hasWhiteSpace(s) {
  return /\s/g.test(s);
}
function copy(id) {
        var from = document.getElementById(id);
        var range = document.createRange();
        window.getSelection().removeAllRanges();
        range.selectNode(from);
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
} 
function clearBruh(id) {
  console.log('sd');
  const tag = document.getElementById(id);
  tag.value = "";
}