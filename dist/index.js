"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const api_1 = __importDefault(require("./api"));
const app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((req, res, next) => {
    if (req.get("token") == "jwttoken") {
        // res.send("Verified !")
        next();
    }
    else {
        next(401);
    }
});
app.use('/api', api_1.default);
exports.default = app;
//# sourceMappingURL=index.js.map