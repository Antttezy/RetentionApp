"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTable = void 0;
var React = require("react");
require("bootstrap/dist/css");
var UserTable = /** @class */ (function (_super) {
    __extends(UserTable, _super);
    function UserTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserTable.prototype.render = function () {
        return (React.createElement("table", { className: "table" }));
    };
    return UserTable;
}(React.Component));
exports.UserTable = UserTable;
//# sourceMappingURL=UsersComponent.js.map