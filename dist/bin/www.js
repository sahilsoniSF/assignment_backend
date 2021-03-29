"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const PORT = 6666;
const server = index_1.default.listen(PORT);
server.on("listening", () => {
    console.log(`Server Running on port : ${PORT}`);
});
//# sourceMappingURL=www.js.map