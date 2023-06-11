import { MyData } from "../Interface/student";

function searchbycollege(globalData: MyData[], collegeName: String) {
  const students_in_college: string[] = globalData
    .filter((students) => students.college == collegeName)
    .map((student) => student.name);
  return students_in_college;
}

module.exports = { searchbycollege };
