"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cqrs_1 = require("@nestjs/cqrs");
const _1 = require("../");
let ExtensionInstallCommandHandler = class ExtensionInstallCommandHandler {
    execute(command, resolve) {
        return undefined;
    }
};
ExtensionInstallCommandHandler = __decorate([
    cqrs_1.CommandHandler(_1.ExtensionInstallCommand)
], ExtensionInstallCommandHandler);
exports.ExtensionInstallCommandHandler = ExtensionInstallCommandHandler;

//# sourceMappingURL=extension-install.command.handler.js.map
