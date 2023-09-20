let text = `But _that's not all!!_ *Here* are*  *~_some handpicked offers we_~* know you'll love.`;
let textArray = text.split("");
const styleTrack = {};
const styleStack = [];
const encs = ["*", "~", "_"];
const encodedTags = {
  "*": "b",
  "~": "s",
  _: "i",
};

text.split("").forEach((v, i) => {
  if (encs.includes(v)) {
    if (styleStack.includes(v)) {
      if (styleStack[styleStack.length - 1] === v) {
        if (!Array.isArray(styleTrack[v]?.end)) {
          styleTrack[v] = { ...styleTrack[v], end: [] };
        }
        styleTrack[v] = { ...styleTrack[v], end: [...styleTrack[v]?.end, i] };
      }
      styleStack.pop(v);
    } else {
      styleStack.push(v);
      if (!Array.isArray(styleTrack[v]?.start)) {
        styleTrack[v] = { ...styleTrack[v], start: [] };
      }
      styleTrack[v] = { ...styleTrack[v], start: [...styleTrack[v]?.start, i] };
    }
  }
});

Object.keys(styleTrack).forEach((v) => {
  if (styleTrack[v]?.start?.length !== styleTrack[v]?.end?.length) {
    styleTrack[v].start = styleTrack[v].start.slice(
      0,
      styleTrack[v]?.end?.length
    );
  }
});

console.log(styleTrack);

Object.keys(styleTrack).forEach((v) => {
  styleTrack[v]?.start?.forEach((value) => {
    textArray = findAndReplace(textArray, `<${encodedTags[v]}>`, value);
  });
  styleTrack[v]?.end?.forEach((value) => {
    textArray = findAndReplace(textArray, `</${encodedTags[v]}>`, value);
  });
});

function findAndReplace(textToParse, value, index) {
  const textToReturn = textToParse.map((v, i) => {
    if (i === index) {
      return value;
    } else {
      return v;
    }
  });
  return textToReturn;
}

console.log(textArray.join(""));
