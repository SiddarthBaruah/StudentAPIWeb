"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sortLexicograph(globalData) {
    let ins = [...globalData]; // Create a new array with the same elements
    ins.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });
    return ins;
}
module.exports = { sortLexicograph };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3J0TGV4aWNvZ3JhcGguanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJtb2R1bGVzL29ydExleGljb2dyYXBoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsU0FBUyxlQUFlLENBQUMsVUFBb0I7SUFDM0MsSUFBSSxHQUFHLEdBQWEsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsNENBQTRDO0lBQ2pGLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztRQUNyQixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcsRUFBRSxlQUFlLEVBQUUsQ0FBQyJ9