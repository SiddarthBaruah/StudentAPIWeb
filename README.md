# StudentAPIWeb
Collects data of students and can sort it lexicographically and filter students on the basis of universities.

# Structure 
The Webpage is divided into two parts. Part looks like this\
<img width="653" alt="image" src="https://github.com/SiddarthBaruah/StudentAPIWeb/assets/95840068/e4bfe287-4d1b-4d69-9121-5aee2066376e">\

and the part 2 looks like this.\
<img width="944" alt="image" src="https://github.com/SiddarthBaruah/StudentAPIWeb/assets/95840068/9e7a9c10-e9b7-489f-9600-fb94e0628627">\

I like minimalism and technicalysm, which is an aesthetic which mostly coders in general love and prefer to use. I could have added effects like hover when clicked or put some fancy ways of putting data, but this time I decided to follow the aesthetic. Thus, my webpage follows that. Just the working that it does shows. 

# Part 1

Part 1 is displayed using flexbox(AllignedRow Wise)
and has the second element in the row is using a Column Flexbox. \
<img width="620" alt="image" src="https://github.com/SiddarthBaruah/StudentAPIWeb/assets/95840068/e09f9294-c4c6-46cb-815e-10aee84efa23">\

The First button **Sort Lexicographically** sorts the data inside the table in alphabetical manner.\
The Second button **Sort RollnumberWise** resets it back.\

The code for the sort is avalible in the [app.js](https://github.com/SiddarthBaruah/StudentAPIWeb/edit/main/app.js#L21).\
***Sort Lexicographically***
```
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
```
***Sort Rollnumber Wise***
```
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
```

# Part 2

In the part 2 section, it takes a input of string and search through the data of student-college name and filter out the Student with the same college name.\
After Entering the name of the college and clicking the **Search Student**, I have filterd out a table with the name of the students. \
<img width="948" alt="image" src="https://github.com/SiddarthBaruah/StudentAPIWeb/assets/95840068/823da4e8-1368-4850-b7d8-90c77332426c">

In order to filter I wrote this code.
```
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
```







