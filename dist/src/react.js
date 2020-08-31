"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBackend = exports.Backend = void 0;
var react_1 = __importStar(require("react"));
var sdk_1 = require("./sdk");
var client_1 = require("./client");
var Context = react_1.default.createContext({});
// Backend is high-level component to provide Backend context to other components
function Backend(props) {
    var _a = react_1.useState(new sdk_1.SDK(new client_1.Client(props.url))), sdk = _a[0], setSDK = _a[1];
    react_1.useEffect(function () {
        setSDK(new sdk_1.SDK(new client_1.Client(props.url)));
    }, [props.url]);
    return (react_1.default.createElement(Context.Provider, { value: sdk }, props.children));
}
exports.Backend = Backend;
// useBackend helps to get backend from context
function useBackend() {
    return react_1.useContext(Context);
}
exports.useBackend = useBackend;
//# sourceMappingURL=react.js.map