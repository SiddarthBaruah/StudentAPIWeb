var globalData;
async function getDData() {
  let result = await fetch(
    "https://1qy9d2uuyg.execute-api.ap-northeast-1.amazonaws.com/default/Students-API"
  );
  result = await result.json();
  globalData = result;
  console.log(result);
  document.getElementById("userdata").innerHTML = result
    .map(
      (user) =>
        `<tr>
            <td>${user["roll no."]}</td>
            <td>${user.name}</td>
            <td>${user.college}</td>
        </tr>`
    )
    .join("");
}

function sortLexicograph() {
  console.log(globalData);
  let result = globalData;
  result.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  document.getElementById("userdata").innerHTML = result
    .map(
      (user) =>
        `<tr>
            <td>${user["roll no."]}</td>
            <td>${user.name}</td>
            <td>${user.college}</td>
        </tr>`
    )
    .join("");
}

function searchbycollege() {
  var input = document.getElementById("collegename").value;
  console.log(globalData);
  document.getElementById("searchcollege").innerHTML = globalData
    .map((user) => {
      if (user.college == input) {
        return `<tr>
            <td>${user["roll no."]}</td>
            <td>${user.name}</td>
            <td>${user.college}</td>
        </tr>`;
      }
    })
    .join("");
}
function sortRollno() {
  console.log(globalData);
  let result = globalData;
  result.sort(function (a, b) {
    return a["roll no."] - b["roll no."];
  });
  document.getElementById("userdata").innerHTML = result
    .map(
      (user) =>
        `<tr>
            <td>${user["roll no."]}</td>
            <td>${user.name}</td>
            <td>${user.college}</td>
        </tr>`
    )
    .join("");
}
getDData();
