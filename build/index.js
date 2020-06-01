"use strict";
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
var port = process.env.PORT || 8000;
app.use(cors_1.default());
app.get("/", function(req, res) {
    res.send("Hello world 3");
});
app.listen(port, function() { return console.log("App running on port " + port); });