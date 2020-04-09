"use strict";

var _interopRequireDefault = require("babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./dropdown.css");

var _jsxFileName = "./../src/TypeAheadDropdown/dropdown.js";

class Dropdown extends _react.default.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    return this.props.getName(
      e.currentTarget.dataset.id,
      e.currentTarget.dataset.name,
      e.currentTarget.dataset.surname
    );
  }

  render() {
    let j = 0;
    const { ulBackgroundColor, liColor, data } = this.props;
    return /*#__PURE__*/ _react.default.createElement(
      "div",
      {
        className: "dropDownDiv",
        style: {
          backgroundColor: ulBackgroundColor
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 7
        }
      },
      /*#__PURE__*/ _react.default.createElement(
        "ul",
        {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 9
          }
        },
        data.map(item => {
          j++;
          return /*#__PURE__*/ _react.default.createElement(
            "li",
            {
              style: {
                color: liColor
              },
              key: j,
              onClick: this.handleClick,
              "data-id": typeof item.id === "undefined" ? "" : item.id,
              "data-name": item.name,
              "data-surname": item.surname,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 15
              }
            },
            item.name,
            " ",
            item.surname
          );
        })
      )
    );
  }
}

var _default = Dropdown;
exports.default = _default;
