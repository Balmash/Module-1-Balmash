"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleBlock = void 0;
const types_1 = require("../types");
async function handleBlock(block) {
    let record = new types_1.StarterEntity(block.block.header.hash.toString());
    record.blockHeight = block.block.header.number.toNumber();
    await record.save();
}
exports.handleBlock = handleBlock;
