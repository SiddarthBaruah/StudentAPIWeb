import { MyData } from "../Interface/student";

function sortLexicograph(globalData: MyData[]) {
  let ins: MyData[] = [...globalData]; // Create a new array with the same elements
  ins.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  return ins;
}

module.exports = { sortLexicograph };
