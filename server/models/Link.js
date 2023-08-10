"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const linkSchema = new mongoose_1.Schema({
    from: {
        type: String,
        required: true,
        unique: true // unique index
    },
    to: {
        type: String,
        required: true,
        unique: true // unique index
    }
});
exports.default = (0, mongoose_1.model)('Link', linkSchema);
