"use strict";

var _interopRequireDefault = require("C:/Users/A\xEFssetou/Workspace/Formation OpenClassrooms/OC_14_HRNet/oc-14-modale-library/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
/**
 * Display the modal
 * @param {Boolean} open 
 * @param {Function} isOpen 
 * @param {String} message 
 * @returns {JSX.Element} Modal component
 */
var Modale = function Modale(_ref) {
  var open = _ref.open,
    isOpen = _ref.isOpen,
    message = _ref.message;
  if (open) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "modale"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "modale__content"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "close",
      onClick: function onClick() {
        return isOpen(!open);
      }
    }), message));
  }
};
var _default = Modale;
exports["default"] = _default;