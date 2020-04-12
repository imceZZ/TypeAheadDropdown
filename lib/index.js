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

      if (
        !this.state.studentSelected &&
        this.state.studentName !== this.props.defaultName
      ) {
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
      inputPlaceholder:
        typeof this.props.placeholder != "undefined"
          ? this.props.placeholder
          : "Search student...",
      studentSelected: false,
      studentName:
        typeof this.props.defaultName != "undefined"
          ? this.props.defaultName
          : ""
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
    this.props.onChange(event.target.value);
  }

  displayTable() {
    this.setState({
      displayTable: true
    });
  }

  getName(id, name, surname) {
    const { selectedObjectToReturn } = this.props;
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
      [selectedObjectToReturn[0]]: id,
      [selectedObjectToReturn[1]]: name,
      [selectedObjectToReturn[2]]: surname
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
          lineNumber: 85,
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
            lineNumber: 89,
            columnNumber: 9
          }
        },
        /*#__PURE__*/ _react.default.createElement("input", {
          className: "searchInput",
          placeholder: this.state.inputPlaceholder,
          value: studentName,
          onChange: this.handleChange.bind(this),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98,
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
                  lineNumber: 105,
                  columnNumber: 13
                }
              },
              /*#__PURE__*/ _react.default.createElement(_dropdown.default, {
                displayProperties: this.props.displayProperties,
                selectedObjectToReturn: this.props.selectedObjectToReturn,
                data: data,
                getName: this.getName,
                ulBackgroundColor: ulBackgroundColor,
                liColor: liColor,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 111,
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
                    lineNumber: 119,
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
                      lineNumber: 125,
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
                      lineNumber: 135,
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
