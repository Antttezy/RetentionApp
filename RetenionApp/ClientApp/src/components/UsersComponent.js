"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTable = void 0;
var React = require("react");
function UserTable(_a) {
    var users = _a.users, loading = _a.loading;
    if (loading) {
        return React.createElement("p", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430");
    }
    else
        return (React.createElement("div", null,
            React.createElement("h1", null, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438"),
            React.createElement("ul", null, users.map(function (user) {
                return React.createElement("li", { key: user.id },
                    "Id: ",
                    user.id,
                    " \u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438: ",
                    user.registration,
                    " \u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0440\u0430\u0437 \u0432 \u0441\u0435\u0442\u0438: ",
                    user.lastActive);
            }))));
}
exports.UserTable = UserTable;
//# sourceMappingURL=UsersComponent.js.map