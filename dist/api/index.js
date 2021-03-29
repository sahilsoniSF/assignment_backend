"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./module/users/index"));
const index_2 = __importDefault(require("./module/contacts/index"));
let router = express_1.default.Router();
router.use('/users', index_1.default);
router.use('/contacts', index_2.default);
exports.default = router;
//# sourceMappingURL=index.js.map