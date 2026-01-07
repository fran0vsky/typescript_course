"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function process(val) {
    if (typeof val === 'object' &&
        !!val &&
        'log' in val &&
        typeof val.log === 'function') {
        val.log();
    }
}
// safer than 'any' but more flexible than union types
//# sourceMappingURL=unknown.js.map