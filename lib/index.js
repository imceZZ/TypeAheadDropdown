"use strict";

var _interopRequireDefault = require("babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _students = _interopRequireDefault(require("./students"));

var _dropdown = _interopRequireDefault(require("./dropdown"));

require("./typeAheadDropdown.css");

var _jsxFileName = "./../src/TypeAheadDropdown/index.js";

class TypeAheadDropdown extends _react.default.Component {
  constructor(props) {
    super(props);

    this.handleClick = e => {
      if (this.wrapRef.contains(e.target)) {
        return;
      }

      if (!this.state.studentSelected) {
        this.setState({
          studentName: ""
        });
      }

      this.setState({
        displayTable: false
      });
    };

    this.state = {
      data:
        typeof this.props.data != "undefined"
          ? this.props.data
          : _students.default,
      displayTable: undefined,
      studentSelected: false,
      studentName: ""
    };
    this.displayTable = this.displayTable.bind(this);
    this.getName = this.getName.bind(this);
    this.btnPrevious = this.btnPrevious.bind(this);
    this.btnNext = this.btnNext.bind(this);
  }

  componentDidMount() {
    this.setState({
      displayTable: false
    });
    document.addEventListener("mousedown", this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }

  handleChange(event) {
    this.setState({
      studentName: event.target.value,
      studentSelected: false
    });
  }

  displayTable() {
    this.setState({
      displayTable: true
    });
  }

  getName(id, name, surname) {
    this.setState(
      {
        studentName: `${name} ${surname}`
      },
      () => {
        this.setState({
          displayTable: false,
          studentSelected: true
        });
      }
    );
    const selectedPerson = {
      id,
      name,
      surname
    };
    this.props.getFullName(selectedPerson);
  }

  btnNext() {
    this.props.btnNext();
  }

  btnPrevious() {
    this.props.btnPrevious();
  }

  render() {
    const { data, displayTable, studentName } = this.state;
    const {
      height,
      width,
      firstButton,
      secondButton,
      btnTextColor,
      btnfFooterBackground,
      btnBackgroundColor,
      ulBackgroundColor,
      liColor
    } = this.props;
    return /*#__PURE__*/ _react.default.createElement(
      "div",
      {
        className: "typeAheadDropdown",
        style: {
          width: typeof width != "undefined" ? width : ""
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 7
        }
      },
      /*#__PURE__*/ _react.default.createElement(
        "div",
        {
          className: "wrapSearchDiv",
          style: {
            height: typeof height != "undefined" ? height : "",
            width: typeof width != "undefined" ? width : ""
          },
          ref: wrapRef => (this.wrapRef = wrapRef),
          onClick: this.displayTable,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 9
          }
        },
        /*#__PURE__*/ _react.default.createElement("input", {
          className: "searchInput",
          placeholder: "Search student...",
          value: studentName,
          onChange: this.handleChange.bind(this),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 11
          }
        }),
        displayTable
          ? /*#__PURE__*/ _react.default.createElement(
              "div",
              {
                className: "searchDiv",
                style: {
                  top: typeof height != "undefined" ? height : ""
                },
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 13
                }
              },
              /*#__PURE__*/ _react.default.createElement(_dropdown.default, {
                data: data,
                getName: this.getName,
                ulBackgroundColor: ulBackgroundColor,
                liColor: liColor,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 15
                }
              }),
              /*#__PURE__*/ _react.default.createElement(
                "div",
                {
                  className: "wrapButtons",
                  style: {
                    backgroundColor: btnfFooterBackground
                  },
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 15
                  }
                },
                /*#__PURE__*/ _react.default.createElement(
                  "button",
                  {
                    className: "btnPrevious",
                    onClick: this.btnPrevious,
                    style: {
                      backgroundColor: btnBackgroundColor,
                      color: btnTextColor
                    },
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 111,
                      columnNumber: 17
                    }
                  },
                  firstButton
                ),
                /*#__PURE__*/ _react.default.createElement(
                  "button",
                  {
                    className: "btnNext",
                    onClick: this.btnNext,
                    style: {
                      backgroundColor: btnBackgroundColor,
                      color: btnTextColor
                    },
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 121,
                      columnNumber: 17
                    }
                  },
                  secondButton
                )
              )
            )
          : ""
      )
    );
  }
}

var _default = TypeAheadDropdown;
exports.default = _default;
