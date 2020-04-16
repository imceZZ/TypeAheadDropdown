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
    const {
      ulBackgroundColor,
      liColor,
      data,
      displayProperties,
      selectedObjectToReturn,
      noDataMSG
    } = this.props;
    let list;

    if (data.length === 0) {
      list = /*#__PURE__*/ _react.default.createElement(
        "li",
        {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 14
          }
        },
        typeof noDataMSG != "undefined" ? noDataMSG : "No data"
      );
    } else {
      list = data.map(item => {
        j++;
        return /*#__PURE__*/ _react.default.createElement(
          "li",
          {
            className: "liSelector",
            style: {
              color: liColor
            },
            key: j,
            onClick: this.handleClick,
            "data-id": item[selectedObjectToReturn[0]],
            "data-name": item[selectedObjectToReturn[1]],
            "data-surname": item[selectedObjectToReturn[2]],
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 11
            }
          },
          item[displayProperties[0]],
          " ",
          item[displayProperties[1]]
        );
      });
    }

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
          lineNumber: 50,
          columnNumber: 7
        }
      },
      /*#__PURE__*/ _react.default.createElement(
        "ul",
        {
          style: {
            cursor: data.length === 0 ? "default" : "pointer"
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 9
          }
        },
        list
      )
    );
  }
}

var _default = Dropdown;
exports.default = _default;
