"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("../");
const cqrs_1 = require("@nestjs/cqrs");
let AddonEnableCommandHandler = class AddonEnableCommandHandler {
    execute(command, resolve) {
        return undefined;
    }
};
AddonEnableCommandHandler = __decorate([
    cqrs_1.CommandHandler(_1.AddonEnableCommand)
], AddonEnableCommandHandler);
exports.AddonEnableCommandHandler = AddonEnableCommandHandler;

//# sourceMappingURL=addon-enable.command.handler.js.map
