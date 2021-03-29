"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let UserRouter = express_1.default.Router();
const Users = [
    {
        id: 1,
        name: "AAAA",
        age: 30
    },
    {
        id: 2,
        name: "bbb",
        age: 40
    }
];
UserRouter.get('/', (req, res) => {
    res.status(200).send(Users);
});
UserRouter.post('/add', (req, res) => {
    Users.push(req.body);
    res.status(201).send(Users);
});
exports.default = UserRouter;
//# sourceMappingURL=user.route.js.map