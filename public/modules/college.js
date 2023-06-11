"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function searchbycollege(globalData, collegeName) {
    const students_in_college = globalData
        .filter((students) => students.college == collegeName)
        .map((student) => student.name);
    return students_in_college;
}
module.exports = { searchbycollege };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVnZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvY29sbGVnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLFNBQVMsZUFBZSxDQUFDLFVBQW9CLEVBQUUsV0FBbUI7SUFDaEUsTUFBTSxtQkFBbUIsR0FBYSxVQUFVO1NBQzdDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSxXQUFXLENBQUM7U0FDckQsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsT0FBTyxtQkFBbUIsQ0FBQztBQUM3QixDQUFDO0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRyxFQUFFLGVBQWUsRUFBRSxDQUFDIn0=