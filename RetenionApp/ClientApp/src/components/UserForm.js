"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserForm = void 0;
var React = require("react");
var Form_1 = require("react-bootstrap/Form");
var Button_1 = require("react-bootstrap/Button");
function UserForm(_a) {
    var onConfirm = _a.onConfirm;
    return (React.createElement(Form_1.default, null,
        React.createElement("label", { htmlFor: "regDate" }, "\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"),
        React.createElement("input", { type: "date", required: true, id: "regDate" }),
        React.createElement("label", { htmlFor: "lastDate" }, "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0440\u0430\u0437 \u0432 \u0441\u0435\u0442\u0438"),
        React.createElement("input", { type: "date", required: true, id: "lastDate" }),
        React.createElement(Button_1.default, { onClick: function (e) { var _a, _b; return onConfirm(e, (_a = document.getElementById('regDate')) === null || _a === void 0 ? void 0 : _a.value, (_b = document.getElementById('lastDate')) === null || _b === void 0 ? void 0 : _b.value); } }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")));
}
exports.UserForm = UserForm;
//# sourceMappingURL=UserForm.js.map