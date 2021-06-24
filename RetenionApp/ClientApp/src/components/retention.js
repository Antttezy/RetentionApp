"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Retention = void 0;
var React = require("react");
function Retention(_a) {
    var retention = _a.retention, loading = _a.loading;
    if (loading)
        return null;
    else
        return (React.createElement("p", null,
            "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C\u043E\u0441\u0442\u0438 \u0437\u0430 ",
            retention.days,
            " \u0434\u043D\u0435\u0439 = ",
            retention.percentage * 100,
            "%"));
}
exports.Retention = Retention;
//# sourceMappingURL=retention.js.map