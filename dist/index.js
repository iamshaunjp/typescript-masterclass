"use strict";
//-----------
// enums 101
//-----------
var Priority;
(function (Priority) {
    Priority[Priority["Lowest"] = 0] = "Lowest";
    Priority[Priority["Low"] = 1] = "Low";
    Priority[Priority["Medium"] = 2] = "Medium";
    Priority[Priority["High"] = 3] = "High";
    Priority[Priority["Urgent"] = 4] = "Urgent";
})(Priority || (Priority = {}));
// function addTicket(details: string, priority: number) {
// 	if (priority === 0) {
// 	}
// 	if (priority === 1) {
// 	}
// 	if (priority === 2) {
// 	}
// 	if (priority === 3) {
// 	}
// 	if (priority === 4) {
// 	}
// }
// addTicket('fix my computer', 3)
function addTicket(details, priority) {
    if (priority === 0) {
    }
    if (priority === 1) {
    }
    if (priority === 2) {
    }
    if (priority === 3) {
    }
    if (priority === 4) {
    }
}
addTicket('fix my computer', Priority.Medium);
