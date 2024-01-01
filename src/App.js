"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const App = () => {
    const divStyle = {
        backgroundColor: 'red',
        padding: '20px',
    };
    return (react_1.default.createElement("div", { style: divStyle },
        react_1.default.createElement("h1", null, "Hello from React!")));
};
exports.default = App;
