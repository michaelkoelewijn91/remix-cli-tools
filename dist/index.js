#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs-extra");
var path = require("path");
var inquirer = require("inquirer");
var CHOICES = fs.readdirSync(path.join(__dirname, 'templates')).filter(function (s) { return s !== '.DS_Store'; });
var QUESTIONS = [
    {
        name: 'template',
        type: 'list',
        message: 'What snippet would you like to generate?',
        choices: CHOICES
    },
    {
        name: 'name',
        type: 'input',
        message: 'Snippet name:'
    }
];
inquirer.prompt(QUESTIONS)
    .then(function (answers) {
    copyTemplate(answers);
});
var copyTemplate = function (_a) {
    var name = _a.name, template = _a.template;
    return __awaiter(void 0, void 0, void 0, function () {
        var CURRENT_ROUTE, _b, from, to_1;
        var _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    CURRENT_ROUTE = process.cwd();
                    _b = template;
                    switch (_b) {
                        case 'component': return [3 /*break*/, 1];
                        case 'route': return [3 /*break*/, 5];
                    }
                    return [3 /*break*/, 6];
                case 1: 
                // Check if directory exists - create if nonexisting
                return [4 /*yield*/, fs.ensureDir("".concat(CURRENT_ROUTE, "/components"))];
                case 2:
                    // Check if directory exists - create if nonexisting
                    _d.sent();
                    from = "".concat((_c = require.main) === null || _c === void 0 ? void 0 : _c.path, "/templates/component");
                    to_1 = "".concat(CURRENT_ROUTE, "/components/").concat(name);
                    return [4 /*yield*/, fs.copy(from, to_1)];
                case 3:
                    _d.sent();
                    return [4 /*yield*/, fs.rename("".concat(to_1, "/ComponentName.stories.tsx"), "".concat(to_1, "/").concat(name, ".stories.tsx"))];
                case 4:
                    _d.sent();
                    fs.readFile("".concat(to_1, "/index.tsx"), 'utf8', function (err, data) {
                        var fileContents = data.replaceAll("ComponentName", name);
                        fs.writeFile("".concat(to_1, "/index.tsx"), fileContents, 'utf8', function (err) {
                            if (err)
                                return console.log(err);
                        });
                    });
                    return [2 /*return*/];
                case 5: return [2 /*return*/];
                case 6: return [2 /*return*/];
            }
        });
    });
};
//# sourceMappingURL=index.js.map