"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let ContactRoute = express_1.default.Router();
let Contacts = [
    {
        id: 1,
        name: "Ram",
        age: 30
    },
    {
        id: 2,
        name: "Don",
        age: 40
    }
];
ContactRoute.get('/', (req, res) => {
    res.status(200).send(Contacts);
});
exports.default = ContactRoute;
//# sourceMappingURL=contact.route.js.map